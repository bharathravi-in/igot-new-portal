import { Injectable } from '@angular/core';

/**
 * CrossPortalNavService — bridges navigation from the Angular 20 new portal
 * to the Angular 16 old portal's routes.
 *
 * When the new portal is embedded as <igot-mfe-app> inside the old portal at
 * localhost:3000/new, window.location is the same page origin.
 * Calling window.location.href = '/app/toc/...' triggers a full old-portal
 * navigation.
 *
 * When running standalone (localhost:4200), the method falls back to logging
 * so it doesn't break the dev experience.
 */
@Injectable({ providedIn: 'root' })
export class CrossPortalNavService {

  /** True when running embedded inside the old portal shell. */
  get isEmbedded(): boolean {
    return window.location.port !== '4200';
  }

  /**
   * Navigate to a course's TOC page in the old portal.
   * Route format: /app/toc/<courseId>/overview
   */
  navigateToToc(courseId: string, tab: string = 'overview'): void {
    const path = `/app/toc/${courseId}/${tab}`;
    if (this.isEmbedded) {
      window.location.href = path;
    } else {
      // Standalone dev mode — log and open in same tab
      console.log(`[CrossPortalNav] Would navigate to: ${path}`);
      window.open(`http://localhost:3000${path}`, '_blank');
    }
  }

  /**
   * Navigate to any arbitrary old-portal path.
   */
  navigateTo(path: string): void {
    if (this.isEmbedded) {
      window.location.href = path;
    } else {
      console.log(`[CrossPortalNav] Would navigate to: ${path}`);
      window.open(`http://localhost:3000${path}`, '_blank');
    }
  }
}
