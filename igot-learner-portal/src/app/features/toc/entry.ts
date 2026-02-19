/**
 * Web Component bootstrap entry for the TOC (Table of Contents) feature.
 * Exposed via Module Federation as './TocFeature'.
 */
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TocFeatureComponent } from './toc-feature.component';

let initialized = false;

export async function bootstrap(): Promise<void> {
  if (initialized) return;
  initialized = true;

  const app = await createApplication({
    providers: [
      provideZonelessChangeDetection(),
      provideAnimationsAsync(),
    ],
  });

  const TocElement = createCustomElement(TocFeatureComponent, {
    injector: app.injector,
  });

  if (!customElements.get('igot-mfe-toc')) {
    customElements.define('igot-mfe-toc', TocElement);
  }
}

export const ELEMENT_NAME = 'igot-mfe-toc';
