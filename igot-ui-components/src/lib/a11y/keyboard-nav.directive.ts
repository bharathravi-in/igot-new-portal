import { Directive, ElementRef, HostListener, inject } from '@angular/core';

/**
 * KeyboardNavDirective
 *
 * Adds arrow-key navigation to a container of interactive elements.
 * Handles Up/Down/Home/End keys for vertical lists and menus.
 *
 * Usage:
 *   <ul igotKeyboardNav>
 *     <li><button>Item 1</button></li>
 *     <li><button>Item 2</button></li>
 *   </ul>
 */
@Directive({
  selector: '[igotKeyboardNav]',
  standalone: true,
})
export class KeyboardNavDirective {
  private readonly el = inject(ElementRef);

  private readonly focusableSelector = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const focusables = this.getFocusableChildren();
    if (focusables.length === 0) return;

    const currentIndex = focusables.indexOf(document.activeElement as HTMLElement);

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        focusables[(currentIndex + 1) % focusables.length].focus();
        break;

      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        focusables[(currentIndex - 1 + focusables.length) % focusables.length].focus();
        break;

      case 'Home':
        event.preventDefault();
        focusables[0].focus();
        break;

      case 'End':
        event.preventDefault();
        focusables[focusables.length - 1].focus();
        break;

      case 'Escape':
        (document.activeElement as HTMLElement)?.blur();
        break;
    }
  }

  private getFocusableChildren(): HTMLElement[] {
    return Array.from(
      this.el.nativeElement.querySelectorAll<HTMLElement>(this.focusableSelector),
    ).filter(el => el.offsetParent !== null);
  }
}
