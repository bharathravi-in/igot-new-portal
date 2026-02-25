import { Pipe, PipeTransform, inject } from '@angular/core';
import { IgotTranslationService } from './translation.service';

/**
 * LocaleDatePipe
 *
 * Formats a Date using the currently active locale from IgotTranslationService.
 *
 * Usage:
 *   {{ someDate | igotDate }}
 *   {{ someDate | igotDate:'long' }}
 */
@Pipe({
  name: 'igotDate',
  standalone: true,
  pure: false,
})
export class LocaleDatePipe implements PipeTransform {
  private readonly translationService = inject(IgotTranslationService);

  transform(value: Date | string | number | null | undefined, style: 'short' | 'medium' | 'long' | 'full' = 'medium'): string {
    if (value == null) return '';

    const date = value instanceof Date ? value : new Date(value);
    if (isNaN(date.getTime())) return '';

    const locale = this.translationService.currentLanguage();

    const options: Intl.DateTimeFormatOptions = this.getOptions(style);
    return new Intl.DateTimeFormat(locale, options).format(date);
  }

  private getOptions(style: string): Intl.DateTimeFormatOptions {
    switch (style) {
      case 'short':
        return { day: 'numeric', month: 'numeric', year: '2-digit' };
      case 'long':
        return { day: 'numeric', month: 'long', year: 'numeric' };
      case 'full':
        return { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      default: // medium
        return { day: 'numeric', month: 'short', year: 'numeric' };
    }
  }
}

/**
 * LocaleNumberPipe
 *
 * Formats a number using the currently active locale.
 *
 * Usage:
 *   {{ someNumber | igotNumber }}
 *   {{ someNumber | igotNumber:'percent' }}
 */
@Pipe({
  name: 'igotNumber',
  standalone: true,
  pure: false,
})
export class LocaleNumberPipe implements PipeTransform {
  private readonly translationService = inject(IgotTranslationService);

  transform(
    value: number | string | null | undefined,
    style: 'decimal' | 'currency' | 'percent' = 'decimal',
    currency = 'INR',
  ): string {
    if (value == null) return '';

    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return '';

    const locale = this.translationService.currentLanguage();
    const options: Intl.NumberFormatOptions = { style };

    if (style === 'currency') {
      options.currency = currency;
    }

    return new Intl.NumberFormat(locale, options).format(num);
  }
}
