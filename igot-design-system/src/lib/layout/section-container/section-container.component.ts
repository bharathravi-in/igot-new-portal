import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * SectionContainerComponent
 *
 * Applies consistent vertical spacing for content sections
 * that scales with zoom-aware breakpoints.
 *
 * Spacing adapts:
 *   Mobile (< 576px): py-4  (16px)
 *   Tablet (576–992px): py-6 (24px)
 *   Desktop (992px+): py-10 (40px)
 *
 * Usage:
 *   <ds-section-container>
 *     <h2>Section Title</h2>
 *     <p>Section content...</p>
 *   </ds-section-container>
 */
@Component({
  selector: 'ds-section-container',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="ds-section-container">
      <ng-content />
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .ds-section-container {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }

      /* Mobile ceiling — 576px */
      @media (min-width: 576px) {
        .ds-section-container {
          padding-top: 1.5rem;
          padding-bottom: 1.5rem;
        }
      }

      /* Tablet Portrait — 853px */
      @media (min-width: 853px) {
        .ds-section-container {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
      }

      /* Desktop — 992px */
      @media (min-width: 992px) {
        .ds-section-container {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }
      }
    `,
  ],
})
export class SectionContainerComponent {}
