import { Component, Input, ChangeDetectionStrategy, signal, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { generateId } from '../../a11y/a11y.utils';

/**
 * IgotFormFieldComponent
 *
 * Accessible form field wrapper with label, input, error, and hint.
 * Implements ControlValueAccessor for reactive form integration.
 *
 * Usage:
 *   <igot-form-field label="Email" type="email" [required]="true"
 *     hint="We'll never share your email" [(ngModel)]="email">
 *   </igot-form-field>
 */
@Component({
  selector: 'igot-form-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => IgotFormFieldComponent), multi: true },
  ],
  template: `
    <div class="form-field-wrapper">
      <label [for]="fieldId" class="form-label" [class.required]="required">
        {{ label }}
        @if (required) {
          <span class="text-error" aria-hidden="true">*</span>
          <span class="sr-only">(required)</span>
        }
      </label>

      <div class="input-wrapper">
        @if (prefixIcon) {
          <mat-icon class="input-prefix" aria-hidden="true">{{ prefixIcon }}</mat-icon>
        }
        <input
          [id]="fieldId"
          [type]="type"
          [placeholder]="placeholder"
          [disabled]="isDisabled()"
          [attr.aria-describedby]="describedBy"
          [attr.aria-invalid]="!!errorMessage"
          [attr.aria-required]="required"
          [attr.autocomplete]="autocomplete"
          [value]="value()"
          (input)="onInput($event)"
          (blur)="onTouched()"
          class="form-input"
          [class.form-input-error]="!!errorMessage"
          [class.has-prefix]="!!prefixIcon"
        />
        @if (suffixIcon) {
          <mat-icon class="input-suffix" aria-hidden="true">{{ suffixIcon }}</mat-icon>
        }
      </div>

      @if (hint && !errorMessage) {
        <p [id]="hintId" class="form-help">{{ hint }}</p>
      }
      @if (errorMessage) {
        <p [id]="errorId" class="form-error" role="alert" aria-live="polite">{{ errorMessage }}</p>
      }
    </div>
  `,
  styles: [`
    :host { display: block; margin-bottom: 1rem; }
    .form-field-wrapper { position: relative; }
    .input-wrapper { position: relative; display: flex; align-items: center; }
    .input-prefix, .input-suffix {
      position: absolute; color: var(--text-tertiary); font-size: 20px; width: 20px; height: 20px;
    }
    .input-prefix { left: 0.75rem; }
    .input-suffix { right: 0.75rem; }
    .has-prefix { padding-left: 2.5rem !important; }
  `],
})
export class IgotFormFieldComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() hint?: string;
  @Input() errorMessage?: string;
  @Input() required = false;
  @Input() prefixIcon?: string;
  @Input() suffixIcon?: string;
  @Input() autocomplete = 'off';

  readonly fieldId = generateId('field');
  readonly hintId = `${this.fieldId}-hint`;
  readonly errorId = `${this.fieldId}-error`;
  readonly value = signal('');
  readonly isDisabled = signal(false);

  private onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  get describedBy(): string {
    const ids: string[] = [];
    if (this.hint && !this.errorMessage) ids.push(this.hintId);
    if (this.errorMessage) ids.push(this.errorId);
    return ids.join(' ') || '';
  }

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value.set(val);
    this.onChange(val);
  }

  writeValue(value: string): void { this.value.set(value ?? ''); }
  registerOnChange(fn: (value: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.isDisabled.set(isDisabled); }
}
