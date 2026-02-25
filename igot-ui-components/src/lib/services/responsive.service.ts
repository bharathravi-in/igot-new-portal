import { Injectable, signal, inject, OnDestroy, NgZone } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface ResponsiveState {
  screenSize: ScreenSize;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isHandset: boolean;
  width: number;
  height: number;
  zoomLevel: number;
}

/**
 * ResponsiveService
 *
 * Reactive viewport state using Angular CDK BreakpointObserver.
 * Supports zoom-aware breakpoints aligned with the Tailwind config.
 */
@Injectable({ providedIn: 'root' })
export class ResponsiveService implements OnDestroy {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly ngZone = inject(NgZone);

  private readonly breakpoints = {
    xs:  '(max-width: 425px)',
    sm:  '(min-width: 426px) and (max-width: 575px)',
    md:  '(min-width: 576px) and (max-width: 767px)',
    lg:  '(min-width: 768px) and (max-width: 991px)',
    xl:  '(min-width: 992px) and (max-width: 1199px)',
    xxl: '(min-width: 1200px)',
  };

  private readonly _state = signal<ResponsiveState>(this._getInitialState());
  private readonly _isMobile = signal(false);
  private readonly _isTablet = signal(false);
  private readonly _isDesktop = signal(true);
  private readonly _columns = signal(12);

  readonly state = this._state.asReadonly();
  readonly isMobile = this._isMobile.asReadonly();
  readonly isTablet = this._isTablet.asReadonly();
  readonly isDesktop = this._isDesktop.asReadonly();
  readonly columns = this._columns.asReadonly();

  private subscription: Subscription | null = null;
  private resizeListener: (() => void) | null = null;

  constructor() {
    this._observeBreakpoints();
    this._observeResize();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  getGridColumns(): number { return this._columns(); }

  getZoomLevel(): number {
    try { return Math.round(window.devicePixelRatio * 100); }
    catch { return 100; }
  }

  private _observeBreakpoints(): void {
    this.subscription = this.breakpointObserver
      .observe([...Object.values(this.breakpoints), Breakpoints.Handset])
      .subscribe(result => {
        this.ngZone.run(() => {
          const size = this._resolveScreenSize(result.breakpoints);
          const isMobile = size === 'xs' || size === 'sm';
          const isTablet = size === 'md' || size === 'lg';
          const isDesktop = size === 'xl' || size === '2xl';

          this._isMobile.set(isMobile);
          this._isTablet.set(isTablet);
          this._isDesktop.set(isDesktop);
          this._columns.set(isMobile ? 4 : isTablet ? 8 : 12);

          this._state.set({
            screenSize: size, isMobile, isTablet, isDesktop,
            isHandset: result.breakpoints[Breakpoints.Handset] ?? false,
            width: window.innerWidth, height: window.innerHeight,
            zoomLevel: this.getZoomLevel(),
          });
        });
      });
  }

  private _observeResize(): void {
    this.resizeListener = () => {
      this.ngZone.run(() => {
        const current = this._state();
        this._state.set({ ...current, width: window.innerWidth, height: window.innerHeight, zoomLevel: this.getZoomLevel() });
      });
    };
    window.addEventListener('resize', this.resizeListener, { passive: true });
  }

  private _resolveScreenSize(breakpoints: Record<string, boolean>): ScreenSize {
    if (breakpoints[this.breakpoints.xs]) return 'xs';
    if (breakpoints[this.breakpoints.sm]) return 'sm';
    if (breakpoints[this.breakpoints.md]) return 'md';
    if (breakpoints[this.breakpoints.lg]) return 'lg';
    if (breakpoints[this.breakpoints.xl]) return 'xl';
    return '2xl';
  }

  private _getInitialState(): ResponsiveState {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1280;
    const h = typeof window !== 'undefined' ? window.innerHeight : 720;
    let size: ScreenSize = '2xl';
    if (w <= 425) size = 'xs';
    else if (w <= 575) size = 'sm';
    else if (w <= 767) size = 'md';
    else if (w <= 991) size = 'lg';
    else if (w <= 1199) size = 'xl';
    return {
      screenSize: size,
      isMobile: size === 'xs' || size === 'sm',
      isTablet: size === 'md' || size === 'lg',
      isDesktop: size === 'xl' || size === '2xl',
      isHandset: w <= 575,
      width: w, height: h, zoomLevel: 100,
    };
  }
}
