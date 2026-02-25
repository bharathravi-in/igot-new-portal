/*
 * Public API Surface of @igot/localization
 */

// Module
export { IgotLocalizationModule, httpLoaderFactory } from './lib/localization.module';

// Service
export { IgotTranslationService, LanguageConfig } from './lib/translation.service';

// Pipes
export { LocaleDatePipe, LocaleNumberPipe } from './lib/locale.pipes';
