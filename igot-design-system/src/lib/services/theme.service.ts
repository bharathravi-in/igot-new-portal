import { Injectable, signal } from '@angular/core';

/**
 * ThemeService
 *
 * Manages global light/dark theme switching using the class strategy.
 * Toggles the `dark` class on `<html>` element, which is consumed by:
 *  - CSS custom properties (theme.scss)
 *  - Tailwind's `dark:` variants
 *  - Angular Material's dark theme
 *
 * Usage:
 *   themeService.toggle()       // switch between light/dark
 *   themeService.darkMode()     // read current state (signal)
 *   themeService.enableDark()   // force dark
 *   themeService.enableLight()  // force light
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _isDark = signal(false);

  /** Readonly signal — true when dark mode is active */
  readonly darkMode = this._isDark.asReadonly();

  constructor() {
    this._initializeTheme();
  }

  /** Toggle between light and dark mode */
  toggle(): void {
    if (this._isDark()) {
      this.enableLight();
    } else {
      this.enableDark();
    }
  }

  /** Activate dark mode */
  enableDark(): void {
    this._isDark.set(true);
    document.documentElement.classList.add('dark');
    this._persist('dark');
  }

  /** Activate light mode */
  enableLight(): void {
    this._isDark.set(false);
    document.documentElement.classList.remove('dark');
    this._persist('light');
  }

  /** Initialize theme from localStorage or system preference */
  private _initializeTheme(): void {
    try {
      const stored = localStorage.getItem('igot-theme');

      if (stored === 'dark') {
        this.enableDark();
        return;
      }

      if (stored === 'light') {
        this.enableLight();
        return;
      }

      // Respect OS preference if no stored value
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;

      if (prefersDark) {
        this.enableDark();
      }
    } catch {
      // localStorage may not be available (SSR / restrictive environments)
    }
  }

  private _persist(value: 'light' | 'dark'): void {
    try {
      localStorage.setItem('igot-theme', value);
    } catch {
      // Silently fail if localStorage is restricted
    }
  }
}
