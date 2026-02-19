import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { IgotDesignSystemModule } from '@igot/design-system';

/**
 * AppModule — NgModule wrapper for Module Federation compatibility.
 *
 * The Angular 16 host loads this module via:
 *   loadRemoteModule({ remoteName: 'igotLearnerPortal', exposedModule: './AppModule' })
 *
 * Internally all components are standalone; this module simply
 * bootstraps and declares the routing tree.
 */
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    IgotDesignSystemModule,
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
