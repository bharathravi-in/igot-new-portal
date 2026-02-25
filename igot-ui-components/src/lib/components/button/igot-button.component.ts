import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * IgotButtonComponent
 *
 * Accessible, themeable button with loading state, icon support,
 * and WCAG 2.1 AA focus indicators.
 *
 * Usage:
 *   <igot-button variant="primary" (clicked)="onSave()">Save</igot-button>
 *   <igot-button variant="outline" [loading]="isSaving" icon="save">Save Draft</igot-button>
 */
@Component({
  selector: 'igot-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled || loading"
      [attr.aria-label]="ariaLabel"
      [attr.aria-busy]="loading"
      [attr.aria-disabled]="disabled || loading"
      [type]="type"
      (click)="onClick($event)"
    >
      @if (loading) {
        <mat-spinner diameter="18" class="mr-2"></mat-spinner>
      }
      @if (icon && !loading) {
        <mat-icon class="btn-icon" [attr.aria-hidden]="true">{{ icon }}</mat-icon>
      }
      <span class="btn-content">
        <ng-content></ng-content>
      </span>
    </button>
  `,
  styles: [`
    :host { display: inline-block; }
    .btn-icon { font-size: 18px; width: 18px; height: 18px; margin-right: 0.5rem; }
    .btn-content { display: inline-flex; align-items: center; }
  `],
})
export class IgotButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() icon?: string;
  @Input() ariaLabel?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;

  @Output() clicked = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    return [
      'btn',
      `btn-${this.variant}`,
      this.size !== 'md' ? `btn-${this.size}` : '',
      this.fullWidth ? 'w-full' : '',
      this.loading ? 'opacity-80 cursor-wait' : '',
    ].filter(Boolean).join(' ');
  }

  onClick(event: MouseEvent): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }
}
