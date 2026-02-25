import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';
import { IgotLocalizationModule } from '@igot/localization';
import { IgotDesignSystemModule } from '@igot/design-system';

/**
 * Use bootstrapApplication (standalone API) so that all providers —
 * including TranslateModule.forRoot()'s TranslateStore — are registered
 * in the application-level injector, making them visible to
 * providedIn:'root' services like IgotTranslationService.
 */
bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(APP_ROUTES),
    importProvidersFrom(IgotLocalizationModule),
    importProvidersFrom(IgotDesignSystemModule),
  ],
}).catch((err) => console.error(err));
