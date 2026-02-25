import { Injectable, signal } from '@angular/core';

export interface ComplianceCheckResult {
  category: string;
  rule: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
}

/**
 * ComplianceService
 *
 * Runtime compliance checks for iGOT UX4G / MeitY standards.
 * Validates accessibility, responsive design, and theming.
 */
@Injectable({ providedIn: 'root' })
export class ComplianceService {
  private readonly _results = signal<ComplianceCheckResult[]>([]);
  readonly results = this._results.asReadonly();

  runAllChecks(): ComplianceCheckResult[] {
    const checks = [
      ...this.checkAccessibility(),
      ...this.checkResponsive(),
      ...this.checkTheming(),
    ];
    this._results.set(checks);
    return checks;
  }

  checkAccessibility(): ComplianceCheckResult[] {
    const results: ComplianceCheckResult[] = [];

    const skipLink = document.querySelector('.skip-link, .skip-to-content, [href="#main-content"]');
    results.push({
      category: 'Accessibility', rule: 'Skip Navigation',
      status: skipLink ? 'pass' : 'fail',
      message: skipLink ? 'Skip navigation link found' : 'Missing skip navigation link',
    });

    const lang = document.documentElement.getAttribute('lang');
    results.push({
      category: 'Accessibility', rule: 'Language Attribute',
      status: lang ? 'pass' : 'fail',
      message: lang ? `Language set to "${lang}"` : 'Missing lang attribute on <html>',
    });

    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
    results.push({
      category: 'Accessibility', rule: 'Image Alt Text',
      status: imagesWithoutAlt.length === 0 ? 'pass' : 'fail',
      message: imagesWithoutAlt.length === 0 ? 'All images have alt text' : `${imagesWithoutAlt.length} image(s) missing alt text`,
    });

    const viewport = document.querySelector('meta[name="viewport"]');
    const vc = viewport?.getAttribute('content') ?? '';
    const allowsZoom = !vc.includes('user-scalable=no') && !vc.includes('maximum-scale=1');
    results.push({
      category: 'Accessibility', rule: 'Viewport Zoom',
      status: allowsZoom ? 'pass' : 'fail',
      message: allowsZoom ? 'Viewport allows zooming' : 'Viewport restricts zooming (WCAG violation)',
    });

    return results;
  }

  checkResponsive(): ComplianceCheckResult[] {
    const results: ComplianceCheckResult[] = [];
    const viewport = document.querySelector('meta[name="viewport"]');
    results.push({
      category: 'Responsive', rule: 'Viewport Meta',
      status: viewport ? 'pass' : 'fail',
      message: viewport ? 'Viewport meta tag present' : 'Missing viewport meta tag',
    });
    const hasOverflow = document.body.scrollWidth > window.innerWidth;
    results.push({
      category: 'Responsive', rule: 'No Horizontal Scroll',
      status: hasOverflow ? 'warning' : 'pass',
      message: hasOverflow ? 'Horizontal scrolling detected' : 'No horizontal overflow',
    });
    return results;
  }

  checkTheming(): ComplianceCheckResult[] {
    const dataTheme = document.documentElement.getAttribute('data-theme');
    return [{
      category: 'Theming', rule: 'Theme Applied',
      status: dataTheme ? 'pass' : 'warning',
      message: dataTheme ? `Active theme: ${dataTheme}` : 'No data-theme attribute found',
    }];
  }
}
