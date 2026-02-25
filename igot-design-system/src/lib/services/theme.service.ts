import { Injectable, signal, computed, OnDestroy, NgZone, inject } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'high-contrast' | 'auto';
export type FontSizePreset = 'small' | 'medium' | 'large' | 'x-large';

/**
 * ThemeService
 *
 * Manages theme switching (light / dark / high-contrast / auto),
 * font-size presets for accessibility, and screen-reader live announcements.
 *
 * The service applies CSS classes on `<html>` consumed by:
 *  - CSS custom properties (theme.scss)
 *  - Tailwind's `dark:` variants
 *  - Angular Material's theme
 *
 * Usage:
 *   themeService.setTheme('dark')
 *   themeService.setFontSize('large')
 *   themeService.currentTheme()        // signal
 *   themeService.isDark()              // computed signal
 *   themeService.currentFontSize()     // signal
 */
@Injectable({ providedIn: 'root' })
export class ThemeService implements OnDestroy {
  private readonly ngZone = inject(NgZone);

  // ── Theme state ──────────────────────────────────────────
  private readonly _theme = signal<ThemeMode>('light');
  private readonly _resolvedTheme = signal<'light' | 'dark' | 'high-contrast'>('light');
  private readonly _fontSize = signal<FontSizePreset>('medium');

  /** Current theme mode (may be 'auto') */
  readonly currentTheme = this._theme.asReadonly();

  /** Resolved theme after evaluating 'auto' against OS preference */
  readonly resolvedTheme = this._resolvedTheme.asReadonly();

  /** True when resolved theme is dark */
  readonly isDark = computed(() => this._resolvedTheme() === 'dark');

  /** True when resolved theme is high-contrast */
  readonly isHighContrast = computed(() => this._resolvedTheme() === 'high-contrast');

  /** Current font-size preset */
  readonly currentFontSize = this._fontSize.asReadonly();

  /** @deprecated Use currentTheme() — kept for backward compatibility */
  readonly darkMode = this.isDark;

  private _prefersColorSchemeQuery: MediaQueryList | null = null;
  private _prefersContrastQuery: MediaQueryList | null = null;
  private readonly _mediaListeners: Array<() => void> = [];

  // ── Font size multipliers ────────────────────────────────
  private readonly fontSizeMap: Record<FontSizePreset, string> = {
    small:    '14px',
    medium:   '16px',
    large:    '18px',
    'x-large': '20px',
  };

  constructor() {
    this._initializeTheme();
    this._initializeFontSize();
    this._listenToSystemPreferences();
  }

  ngOnDestroy(): void {
    this._removeMediaListeners();
  }

  // ── Public API ───────────────────────────────────────────

  /** Set theme mode */
  setTheme(mode: ThemeMode): void {
    this._theme.set(mode);

    if (mode === 'auto') {
      this._applyAutoTheme();
    } else {
      this._applyTheme(mode);
    }
    this._persist('igot-theme', mode);
    this._announce(`Theme changed to ${mode}`);
  }

  /** Toggle between light and dark */
  toggle(): void {
    const resolved = this._resolvedTheme();
    this.setTheme(resolved === 'dark' ? 'light' : 'dark');
  }

  /** @deprecated Use setTheme('dark') */
  enableDark(): void { this.setTheme('dark'); }
  /** @deprecated Use setTheme('light') */
  enableLight(): void { this.setTheme('light'); }

  /** Set font size preset */
  setFontSize(preset: FontSizePreset): void {
    this._fontSize.set(preset);
    document.documentElement.style.fontSize = this.fontSizeMap[preset];
    document.documentElement.setAttribute('data-font-size', preset);
    this._persist('igot-font-size', preset);
    this._announce(`Font size changed to ${preset}`);
  }

  /** Cycle through themes: light → dark → high-contrast → auto → light */
  cycleTheme(): void {
    const order: ThemeMode[] = ['light', 'dark', 'high-contrast', 'auto'];
    const current = this._theme();
    const idx = order.indexOf(current);
    this.setTheme(order[(idx + 1) % order.length]);
  }

  // ── Private helpers ──────────────────────────────────────

  private _applyTheme(mode: 'light' | 'dark' | 'high-contrast'): void {
    const html = document.documentElement;

    // Remove all theme classes
    html.classList.remove('dark', 'high-contrast');
    html.removeAttribute('data-theme');

    switch (mode) {
      case 'dark':
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
        break;
      case 'high-contrast':
        html.classList.add('dark', 'high-contrast');
        html.setAttribute('data-theme', 'high-contrast');
        break;
      default:
        html.setAttribute('data-theme', 'light');
        break;
    }

    this._resolvedTheme.set(mode);
  }

  private _applyAutoTheme(): void {
    // Check high-contrast first
    const prefersContrast = this._prefersContrastQuery?.matches ?? false;
    if (prefersContrast) {
      this._applyTheme('high-contrast');
      return;
    }

    const prefersDark = this._prefersColorSchemeQuery?.matches ?? false;
    this._applyTheme(prefersDark ? 'dark' : 'light');
  }

  private _initializeTheme(): void {
    try {
      const stored = localStorage.getItem('igot-theme') as ThemeMode | null;
      if (stored && ['light', 'dark', 'high-contrast', 'auto'].includes(stored)) {
        this.setTheme(stored);
      } else {
        this.setTheme('auto');
      }
    } catch {
      this.setTheme('light');
    }
  }

  private _initializeFontSize(): void {
    try {
      const stored = localStorage.getItem('igot-font-size') as FontSizePreset | null;
      if (stored && stored in this.fontSizeMap) {
        this.setFontSize(stored);
      }
    } catch { /* noop */ }
  }

  private _listenToSystemPreferences(): void {
    try {
      this._prefersColorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this._prefersContrastQuery = window.matchMedia('(prefers-contrast: more)');

      const colorHandler = () => {
        if (this._theme() === 'auto') {
          this.ngZone.run(() => this._applyAutoTheme());
        }
      };

      const contrastHandler = () => {
        if (this._theme() === 'auto') {
          this.ngZone.run(() => this._applyAutoTheme());
        }
      };

      this._prefersColorSchemeQuery.addEventListener('change', colorHandler);
      this._prefersContrastQuery.addEventListener('change', contrastHandler);

      this._mediaListeners.push(
        () => this._prefersColorSchemeQuery?.removeEventListener('change', colorHandler),
        () => this._prefersContrastQuery?.removeEventListener('change', contrastHandler),
      );
    } catch { /* SSR / restrictive environments */ }
  }

  private _removeMediaListeners(): void {
    this._mediaListeners.forEach(fn => fn());
    this._mediaListeners.length = 0;
  }

  private _persist(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch { /* Silently fail if localStorage is restricted */ }
  }

  /** Screen-reader live announcement */
  private _announce(message: string): void {
    try {
      let el = document.getElementById('igot-a11y-live');
      if (!el) {
        el = document.createElement('div');
        el.id = 'igot-a11y-live';
        el.setAttribute('aria-live', 'polite');
        el.setAttribute('aria-atomic', 'true');
        el.classList.add('sr-only');
        document.body.appendChild(el);
      }
      el.textContent = '';
      // Small delay ensures screen readers pick up the change
      setTimeout(() => { el!.textContent = message; }, 100);
    } catch { /* noop */ }
  }
}
