import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Factory for creating the HTTP translation loader.
 * Loads JSON files from /assets/i18n/{lang}.json
 */
export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * IgotLocalizationModule
 *
 * Drop-in NgModule that configures @ngx-translate for the application.
 * Import this in your root AppModule or provide via bootstrapApplication.
 *
 * Usage (standalone):
 *   bootstrapApplication(AppComponent, {
 *     providers: [
 *       importProvidersFrom(IgotLocalizationModule),
 *     ]
 *   });
 *
 * Usage (NgModule):
 *   @NgModule({ imports: [IgotLocalizationModule] })
 *   export class AppModule {}
 */
@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class IgotLocalizationModule {}
