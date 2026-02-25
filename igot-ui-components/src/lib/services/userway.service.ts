import { Injectable, signal } from '@angular/core';

/**
 * UserWayService
 *
 * Manages the UserWay accessibility widget integration.
 * UserWay provides AI-powered remediation for WCAG 2.1 compliance.
 */
@Injectable({ providedIn: 'root' })
export class UserWayService {
  private readonly _isLoaded = signal(false);
  readonly isLoaded = this._isLoaded.asReadonly();

  initialize(accountId: string): void {
    if (this._isLoaded() || typeof document === 'undefined') return;
    const script = document.createElement('script');
    script.src = 'https://cdn.userway.org/widget.js';
    script.setAttribute('data-account', accountId);
    script.async = true;
    script.onload = () => this._isLoaded.set(true);
    document.body.appendChild(script);
  }

  openWidget(): void {
    try { (window as any).UserWay?.widgetOpen(); } catch { /* noop */ }
  }

  closeWidget(): void {
    try { (window as any).UserWay?.widgetClose(); } catch { /* noop */ }
  }
}
