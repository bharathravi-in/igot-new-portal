import { Injectable, inject, OnDestroy, NgZone } from '@angular/core';
import { announce } from './a11y.utils';

/**
 * ScreenReaderService
 *
 * Provides methods for making announcements to screen readers
 * and managing ARIA live regions for dynamic content updates.
 */
@Injectable({ providedIn: 'root' })
export class ScreenReaderService implements OnDestroy {
  private readonly ngZone = inject(NgZone);
  private announcementQueue: string[] = [];
  private isProcessing = false;
  private processingTimer: ReturnType<typeof setTimeout> | null = null;

  /** Announce a message politely (waits for current speech to finish) */
  announcePolite(message: string): void {
    this.queueAnnouncement(message, 'polite');
  }

  /** Announce a message assertively (interrupts current speech) */
  announceAssertive(message: string): void {
    announce(message, 'assertive');
  }

  /** Announce navigation to a new page/section */
  announceNavigation(pageTitle: string): void {
    this.announcePolite(`Navigated to ${pageTitle}`);
  }

  /** Announce a form validation error */
  announceError(fieldLabel: string, errorMessage: string): void {
    this.announceAssertive(`Error in ${fieldLabel}: ${errorMessage}`);
  }

  /** Announce loading state changes */
  announceLoading(isLoading: boolean, context = ''): void {
    if (isLoading) {
      this.announcePolite(`Loading ${context}`.trim());
    } else {
      this.announcePolite(`${context} loaded`.trim());
    }
  }

  /** Announce a count update (e.g., search results) */
  announceCount(count: number, itemLabel: string): void {
    const plural = count === 1 ? '' : 's';
    this.announcePolite(`${count} ${itemLabel}${plural} found`);
  }

  ngOnDestroy(): void {
    if (this.processingTimer) {
      clearTimeout(this.processingTimer);
    }
  }

  private queueAnnouncement(message: string, priority: 'polite' | 'assertive'): void {
    this.announcementQueue.push(message);
    if (!this.isProcessing) {
      this.processQueue(priority);
    }
  }

  private processQueue(priority: 'polite' | 'assertive'): void {
    if (this.announcementQueue.length === 0) {
      this.isProcessing = false;
      return;
    }

    this.isProcessing = true;
    const message = this.announcementQueue.shift()!;
    announce(message, priority);

    this.processingTimer = setTimeout(() => {
      this.ngZone.run(() => this.processQueue(priority));
    }, 500);
  }
}
