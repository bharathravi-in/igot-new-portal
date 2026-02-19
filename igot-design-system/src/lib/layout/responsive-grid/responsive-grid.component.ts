import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';

/**
 * ResponsiveGridComponent
 *
 * Responsive CSS grid wrapper using zoom-aware breakpoints.
 *
 * Column adaptation (on 1280px base screen):
 *   400% zoom (320px): always 1 column
 *   300% zoom (426px): 1 column
 *   200% zoom (640px): up to 2 columns
 *   150% zoom (853px): up to 2 columns
 *   ~130% zoom (992px): up to 3 columns (Desktop starts)
 *   100% zoom (1280px): up to 4 columns
 *
 * Uses Tailwind grid utilities with the custom breakpoint tokens:
 *   md=576px, lg=640px, 3xl=992px, 5xl=1200px
 *
 * Inputs:
 *   columns — 1 | 2 | 3 | 4 (default: 3)
 *   gap     — 'sm' | 'md' | 'lg' (default: 'md')
 */
@Component({
  selector: 'ds-responsive-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="gridClasses()">
      <ng-content />
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class ResponsiveGridComponent {
  /** Number of columns at the largest breakpoint */
  columns = input<1 | 2 | 3 | 4>(3);

  /** Gap size between grid items */
  gap = input<'sm' | 'md' | 'lg'>('md');

  gridClasses = computed(() => {
    // Zoom-aware breakpoints:
    //   md  = 576px (~250% zoom, mobile ceiling)
    //   lg  = 640px (200% zoom, phablet)
    //   3xl = 992px (~130% zoom, desktop starts)
    //   5xl = 1200px (~107% zoom, full desktop)
    const colMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 3xl:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 5xl:grid-cols-4',
    };

    const gapMap: Record<string, string> = {
      sm: 'gap-2 md:gap-3',
      md: 'gap-3 md:gap-4 3xl:gap-6',
      lg: 'gap-4 md:gap-6 3xl:gap-8',
    };

    return `grid ${colMap[this.columns()]} ${gapMap[this.gap()]}`;
  });
}
