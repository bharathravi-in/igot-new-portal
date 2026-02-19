/**
 * Web Component bootstrap entry for the My Learning feature.
 * Exposed via Module Federation as './MyLearningFeature'.
 */
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MyLearningFeatureComponent } from './my-learning-feature.component';

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

  const MyLearningElement = createCustomElement(MyLearningFeatureComponent, {
    injector: app.injector,
  });

  if (!customElements.get('igot-mfe-my-learning')) {
    customElements.define('igot-mfe-my-learning', MyLearningElement);
  }
}

export const ELEMENT_NAME = 'igot-mfe-my-learning';
