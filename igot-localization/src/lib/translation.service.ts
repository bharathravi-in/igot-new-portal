import { Injectable, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, catchError } from 'rxjs';

export interface LanguageConfig {
  code: string;
  label: string;
  nativeLabel: string;
  dir: 'ltr' | 'rtl';
}

/**
 * IgotTranslationService
 *
 * Wraps @ngx-translate with iGOT-specific multilingual support.
 * Supports Hindi, Tamil, Telugu, Bengali, and English with
 * RTL detection and persisted language preference.
 *
 * Usage:
 *   translationService.setLanguage('hi');
 *   translationService.currentLanguage();  // signal
 */
@Injectable({ providedIn: 'root' })
export class IgotTranslationService {
  private readonly translate = inject(TranslateService);

  /** Available language configurations */
  readonly supportedLanguages: LanguageConfig[] = [
    { code: 'en', label: 'English',  nativeLabel: 'English',  dir: 'ltr' },
    { code: 'hi', label: 'Hindi',    nativeLabel: 'हिन्दी',     dir: 'ltr' },
    { code: 'ta', label: 'Tamil',    nativeLabel: 'தமிழ்',     dir: 'ltr' },
    { code: 'te', label: 'Telugu',   nativeLabel: 'తెలుగు',     dir: 'ltr' },
    { code: 'bn', label: 'Bengali',  nativeLabel: 'বাংলা',     dir: 'ltr' },
  ];

  private readonly _currentLang = signal<string>('en');
  private readonly _isRtl = signal<boolean>(false);

  /** Current language code */
  readonly currentLanguage = this._currentLang.asReadonly();

  /** Whether the current language is RTL */
  readonly isRtl = this._isRtl.asReadonly();

  constructor() {
    this._initialize();
  }

  /** Set the active language */
  setLanguage(langCode: string): void {
    const config = this.supportedLanguages.find(l => l.code === langCode);
    if (!config) return;

    this.translate.use(langCode);
    this._currentLang.set(langCode);
    this._isRtl.set(config.dir === 'rtl');

    // Update HTML attributes
    document.documentElement.setAttribute('lang', langCode);
    document.documentElement.setAttribute('dir', config.dir);

    // Persist preference
    try {
      localStorage.setItem('igot-language', langCode);
    } catch { /* noop */ }
  }

  /** Get translated value by key */
  instant(key: string, params?: Record<string, unknown>): string {
    return this.translate.instant(key, params);
  }

  /** Get translated value as Observable */
  get(key: string, params?: Record<string, unknown>): Observable<string> {
    return this.translate.get(key, params).pipe(
      catchError(() => of(key)),
    );
  }

  /** Get current language config */
  getCurrentConfig(): LanguageConfig | undefined {
    return this.supportedLanguages.find(l => l.code === this._currentLang());
  }

  private _initialize(): void {
    // Set available languages
    const langCodes = this.supportedLanguages.map(l => l.code);
    this.translate.addLangs(langCodes);
    this.translate.setDefaultLang('en');

    // Restore persisted language or detect browser language
    try {
      const stored = localStorage.getItem('igot-language');
      if (stored && langCodes.includes(stored)) {
        this.setLanguage(stored);
        return;
      }
    } catch { /* noop */ }

    // Try browser language
    const browserLang = this.translate.getBrowserLang() ?? 'en';
    const matchedLang = langCodes.includes(browserLang) ? browserLang : 'en';
    this.setLanguage(matchedLang);
  }
}
