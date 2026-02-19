import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * PageContainerComponent
 *
 * Centers content with a responsive max-width and horizontal padding
 * that adapts to zoom-aware breakpoints.
 *
 * Breakpoint behavior (on 1280px base):
 *   400% zoom (320px) → 8px padding, full width
 *   300% zoom (426px) → 12px padding
 *   200% zoom (640px) → 16px padding
 *   150% zoom (853px) → 24px padding
 *   100% zoom (1280px)→ 32px padding, max-width 1280px
 *
 * Usage:
 *   <ds-page-container>
 *     <!-- page content -->
 *   </ds-page-container>
 */
@Component({
  selector: 'ds-page-container',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ds-page-container">
      <ng-content />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }

      .ds-page-container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }

      /* 300% zoom — 426px — Standard Smartphone */
      @media (min-width: 426px) {
        .ds-page-container {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }
      }

      /* ~250% zoom — 576px — Mobile ceiling */
      @media (min-width: 576px) {
        .ds-page-container {
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      /* 200% zoom — 640px — Phablet */
      @media (min-width: 640px) {
        .ds-page-container {
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      /* 150% zoom — 853px — Tablet Portrait */
      @media (min-width: 853px) {
        .ds-page-container {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
      }

      /* ~130% zoom — 992px — Tablet Landscape */
      @media (min-width: 992px) {
        .ds-page-container {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
      }

      /* 125% zoom — 1024px — Small Desktop */
      @media (min-width: 1024px) {
        .ds-page-container {
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }

      /* 100% zoom — 1280px — Base Desktop */
      @media (min-width: 1280px) {
        .ds-page-container {
          max-width: 80rem;
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }
    `,
  ],
})
export class PageContainerComponent {}
