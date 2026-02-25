import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * IgotCardComponent
 *
 * Accessible card with header, body, and footer content-projection slots.
 *
 * Usage:
 *   <igot-card [elevated]="true">
 *     <div card-header>Title</div>
 *     <div card-body>Content</div>
 *     <div card-footer>Actions</div>
 *   </igot-card>
 */
@Component({
  selector: 'igot-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article
      class="card"
      [class.card--elevated]="elevated"
      [class.card--interactive]="interactive"
      [class.card--compact]="compact"
      [attr.role]="interactive ? 'button' : null"
      [attr.tabindex]="interactive ? 0 : null"
      [attr.aria-label]="ariaLabel"
    >
      <div class="card-header">
        <ng-content select="[card-header]"></ng-content>
      </div>
      <div class="card-body">
        <ng-content select="[card-body]"></ng-content>
        <ng-content></ng-content>
      </div>
      <div class="card-footer">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </article>
  `,
  styles: [`
    :host { display: block; }

    .card {
      background-color: var(--bg-primary);
      border-radius: 0.75rem;
      border: 1px solid var(--border-primary);
      overflow: hidden;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }
    .card--elevated { border: none; box-shadow: var(--shadow-md); }
    .card--interactive {
      cursor: pointer;
      &:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); }
      &:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
    }
    .card--compact .card-body { padding: 1rem; }

    .card-header {
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--border-primary);
      font-weight: 600;
      &:empty { display: none; }
    }
    .card-body { padding: 1.5rem; }
    .card-footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid var(--border-primary);
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      &:empty { display: none; }
    }
  `],
})
export class IgotCardComponent {
  @Input() elevated = false;
  @Input() interactive = false;
  @Input() compact = false;
  @Input() ariaLabel?: string;
}
