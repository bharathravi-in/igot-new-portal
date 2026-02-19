/**
 * Web Component bootstrap entry for the Search feature.
 * Exposed via Module Federation as './SearchFeature'.
 */
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SearchFeatureComponent } from './search-feature.component';

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

  const SearchElement = createCustomElement(SearchFeatureComponent, {
    injector: app.injector,
  });

  if (!customElements.get('igot-mfe-search')) {
    customElements.define('igot-mfe-search', SearchElement);
  }
}

export const ELEMENT_NAME = 'igot-mfe-search';
