import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';

/**
 * IgotBadgeComponent
 *
 * Accessible inline badge/chip for status indicators, tags, and counts.
 *
 * Usage:
 *   <igot-badge variant="success">Active</igot-badge>
 *   <igot-badge variant="warning" [pill]="true">Pending</igot-badge>
 */
@Component({
  selector: 'igot-badge',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="badgeClasses" [attr.aria-label]="ariaLabel" role="status">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    :host { display: inline-flex; }
    .badge {
      display: inline-flex; align-items: center;
      padding: 0.125rem 0.625rem; border-radius: 0.375rem;
      font-size: 0.75rem; font-weight: 500; line-height: 1.25rem;
    }
    .badge--pill { border-radius: 9999px; }
    .badge--primary { background-color: #dbeafe; color: #1e40af; }
    .badge--success { background-color: #dcfce7; color: #166534; }
    .badge--warning { background-color: #fef3c7; color: #92400e; }
    .badge--error   { background-color: #fee2e2; color: #991b1b; }
    .badge--neutral { background-color: var(--bg-tertiary); color: var(--text-secondary); }
  `],
})
export class IgotBadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
  @Input() pill = false;
  @Input() ariaLabel?: string;

  get badgeClasses(): string {
    return ['badge', `badge--${this.variant}`, this.pill ? 'badge--pill' : '']
      .filter(Boolean).join(' ');
  }
}
