/**
 * Web Component bootstrap entry for the Profile feature.
 * Exposed via Module Federation as './ProfileFeature'.
 */
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProfileFeatureComponent } from './profile-feature.component';

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

  const ProfileElement = createCustomElement(ProfileFeatureComponent, {
    injector: app.injector,
  });

  if (!customElements.get('igot-mfe-profile')) {
    customElements.define('igot-mfe-profile', ProfileElement);
  }
}

export const ELEMENT_NAME = 'igot-mfe-profile';
