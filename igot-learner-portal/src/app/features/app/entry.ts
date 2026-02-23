/**
 * Full-App Web Component bootstrap entry.
 *
 * Exposed via Module Federation as './AppFeature'.
 *
 * Routing strategy:
 *   APP_BASE_HREF = '/new'  →  Angular 20 router resolves paths relative to /new
 *   /new       → route '/'     → HomeComponent (landing)
 *   /new/home  → route '/home' → HomeFeatureComponent
 *   /new/profile → route '/profile' → ProfileFeatureComponent
 *
 * WHY withDisabledInitialNavigation():
 *   createApplication() bootstraps the app BEFORE <igot-mfe-app> is appended
 *   to the host DOM. If the router does initial navigation during bootstrap,
 *   <router-outlet> doesn't exist yet and the page renders empty.
 *   We disable automatic initial navigation and call triggerNavigation()
 *   explicitly from MfeWrapperComponent after the element is in the DOM.
 */
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ApplicationRef } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withDisabledInitialNavigation, Router } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { APP_ROUTES } from '../../app.routes';
import { AppComponent } from '../../app.component';

let initialized = false;
let appRef: ApplicationRef | null = null;

function getBaseHref(): string {
  return window.location.port === '4200' ? '/' : '/new';
}

/**
 * Called by MfeWrapperComponent after <igot-mfe-app> is appended to the DOM.
 * Triggers the Angular router's initial navigation so <router-outlet> renders
 * the correct component for the current URL.
 */
export function triggerNavigation(): void {
  if (!appRef) return;
  const router = appRef.injector.get(Router);
  // Navigate to the current full pathname so Angular resolves the route
  // relative to APP_BASE_HREF ('/new'). e.g. /new/home resolves to route '/home'.
  router.navigateByUrl(window.location.pathname + window.location.search);
}

export async function bootstrap(): Promise<void> {
  if (initialized) return;
  initialized = true;

  appRef = await createApplication({
    providers: [
      provideAnimations(),
      provideHttpClient(withFetch()),
      { provide: APP_BASE_HREF, useValue: getBaseHref() },
      // Disable automatic initial navigation — we call triggerNavigation()
      // manually after the custom element is inserted into the host DOM,
      // ensuring <router-outlet> exists before the first route renders.
      provideRouter(APP_ROUTES, withDisabledInitialNavigation()),
    ],
  });

  const AppElement = createCustomElement(AppComponent, {
    injector: appRef.injector,
  });

  if (!customElements.get('igot-mfe-app')) {
    customElements.define('igot-mfe-app', AppElement);
  }
}
