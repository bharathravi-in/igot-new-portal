import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ThemeService } from '@igot/design-system';

@Component({
  selector: 'igot-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'iGOT Learner Portal';

  /**
   * Injecting ThemeService here ensures it is instantiated at app startup,
   * which triggers _initializeTheme() — reading the user's saved preference
   * from localStorage and applying the correct dark/light class to <html>.
   */
  private readonly _theme = inject(ThemeService);
}
