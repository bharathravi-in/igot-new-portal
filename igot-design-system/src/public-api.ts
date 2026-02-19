/*
 * Public API Surface of igot-design-system
 *
 * Everything exported here is available to consumers via:
 *   import { ... } from '@igot/design-system';
 */

// Module (for MF / NgModule-based hosts)
export { IgotDesignSystemModule } from './lib/igot-design-system.module';

// Services
export { ThemeService } from './lib/services/theme.service';

// Layout Components
export {
  PageContainerComponent,
  SectionContainerComponent,
  ResponsiveGridComponent,
} from './lib/layout/index';
