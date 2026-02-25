import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { trapFocus } from './a11y.utils';

/**
 * FocusTrapDirective
 *
 * Traps keyboard focus inside the host element.
 * Useful for modals, dialogs, and dropdown menus.
 *
 * Usage:
 *   <div igotFocusTrap> ... </div>
 *   <div [igotFocusTrap]="isOpen"> ... </div>
 */
@Directive({
  selector: '[igotFocusTrap]',
  standalone: true,
})
export class FocusTrapDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);

  @Input('igotFocusTrap') set active(value: boolean | '') {
    const isActive = value === '' || value === true;
    if (isActive && !this.cleanup) {
      this.activate();
    } else if (!isActive && this.cleanup) {
      this.deactivate();
    }
  }

  private cleanup: (() => void) | null = null;

  ngOnInit(): void {
    if (!this.cleanup) {
      this.activate();
    }
  }

  ngOnDestroy(): void {
    this.deactivate();
  }

  private activate(): void {
    this.cleanup = trapFocus(this.el.nativeElement);
  }

  private deactivate(): void {
    this.cleanup?.();
    this.cleanup = null;
  }
}
