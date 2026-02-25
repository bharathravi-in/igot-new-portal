/**
 * Web Component bootstrap entry for the Home feature.
 *
 * This module is exposed via Module Federation as './HomeFeature'.
 * When the host loads it, it calls bootstrap() which:
 * 1. Creates a standalone Angular application via createApplication()
 * 2. Wraps HomeFeatureComponent as a Custom Element <igot-mfe-home>
 * 3. Registers it with the browser's CustomElementRegistry
 *
 * Uses provideZonelessChangeDetection() to avoid zone.js
 * conflicts with the Angular 16 host application.
 */
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { IgotLocalizationModule } from '@igot/localization';
import { HomeFeatureComponent } from './home-feature.component';

let initialized = false;

export async function bootstrap(): Promise<void> {
  if (initialized) return;
  initialized = true;

  const app = await createApplication({
    providers: [
      provideZonelessChangeDetection(),
      provideAnimationsAsync(),
      provideHttpClient(),
      importProvidersFrom(IgotLocalizationModule),
    ],
  });

  const HomeElement = createCustomElement(HomeFeatureComponent, {
    injector: app.injector,
  });

  if (!customElements.get('igot-mfe-home')) {
    customElements.define('igot-mfe-home', HomeElement);
  }
}

/** Custom element tag name for use by the host */
export const ELEMENT_NAME = 'igot-mfe-home';
