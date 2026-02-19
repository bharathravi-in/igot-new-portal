import { NgModule } from '@angular/core';

import {
  PageContainerComponent,
  SectionContainerComponent,
  ResponsiveGridComponent,
} from './layout/index';

/**
 * IgotDesignSystemModule
 *
 * NgModule wrapper for the design system.
 * Provides all layout primitives and services.
 *
 * Standalone consumers can import components directly.
 * NgModule-based hosts (e.g. Angular 16) can import this module.
 */
@NgModule({
  imports: [
    PageContainerComponent,
    SectionContainerComponent,
    ResponsiveGridComponent,
  ],
  exports: [
    PageContainerComponent,
    SectionContainerComponent,
    ResponsiveGridComponent,
  ],
})
export class IgotDesignSystemModule {}
