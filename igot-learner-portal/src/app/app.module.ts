import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { IgotDesignSystemModule } from '@igot/design-system';
import { IgotLocalizationModule } from '@igot/localization';

/**
 * AppModule — NgModule exposed via Module Federation for Angular 16 host.
 *
 * The Angular 16 host loads this module via:
 *   loadRemoteModule({ remoteName: 'igotLearnerPortal', exposedModule: './AppModule' })
 *
 * Bootstrapping is handled by bootstrapApplication() in bootstrap.ts.
 * This module only exists so the MFE host can import routes + shared providers.
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    IgotDesignSystemModule,
    IgotLocalizationModule,
  ],
})
export class AppModule {}
