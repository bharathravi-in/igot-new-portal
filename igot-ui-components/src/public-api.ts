/* @igot/ui-components — public API */

// Accessibility utilities
export { generateId, announce, trapFocus, getRelativeLuminance, getContrastRatio, meetsWCAGContrast } from './lib/a11y/a11y.utils';
export { ScreenReaderService } from './lib/a11y/screen-reader.service';
export { FocusTrapDirective } from './lib/a11y/focus-trap.directive';
export { KeyboardNavDirective } from './lib/a11y/keyboard-nav.directive';

// Components
export { IgotButtonComponent } from './lib/components/button/igot-button.component';
export { IgotCardComponent } from './lib/components/card/igot-card.component';
export { IgotFormFieldComponent } from './lib/components/form-field/igot-form-field.component';
export { IgotBadgeComponent } from './lib/components/badge/igot-badge.component';

// Services
export { ResponsiveService, ScreenSize, ResponsiveState } from './lib/services/responsive.service';
export { ComplianceService, ComplianceCheckResult } from './lib/services/compliance.service';
export { UserWayService } from './lib/services/userway.service';
