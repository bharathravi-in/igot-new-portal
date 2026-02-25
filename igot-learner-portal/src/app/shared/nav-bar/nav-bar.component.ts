import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '@igot/design-system';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'igot-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  readonly themeService = inject(ThemeService);
  activeRoute = 'home';
  mobileMenuOpen = signal(false);

  navItems = [
    { label: 'Home',        path: '/home',        icon: 'home' },
    { label: 'Explore',     path: '/search',       icon: 'search' },
    { label: 'My Learning', path: '/my-learning',  icon: 'menu_book' },
    { label: 'Profile',     path: '/profile',      icon: 'person' },
  ];

  themeOptions = [
    { label: 'Light',          value: 'light'          as const, icon: 'light_mode' },
    { label: 'Dark',           value: 'dark'           as const, icon: 'dark_mode' },
    { label: 'High Contrast',  value: 'high-contrast'  as const, icon: 'contrast' },
    { label: 'Auto (System)',  value: 'auto'           as const, icon: 'brightness_auto' },
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const seg = e.urlAfterRedirects.split('/')[1] || 'home';
        this.activeRoute = seg;
        // Close mobile menu on navigation
        this.mobileMenuOpen.set(false);
      });
    const seg = this.router.url.split('/')[1] || 'home';
    this.activeRoute = seg;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  get currentThemeIcon(): string {
    const t = this.themeService.currentTheme();
    return this.themeOptions.find(o => o.value === t)?.icon ?? 'brightness_auto';
  }

  /** Switch back to the old Classic portal */
  goClassic(): void {
    const routeMap: { new: string; old: string }[] = [
      { new: 'home',        old: '/page/home' },
      { new: 'search',      old: '/app/globalsearch' },
      { new: 'profile',     old: '/app/person-profile' },
      { new: 'my-learning', old: '/app/my-learning' },
      { new: 'toc',         old: '/app/toc' },
    ];
    const match = routeMap.find(r => r.new === this.activeRoute);
    const oldPath = match ? match.old : '/page/home';
    window.location.href = `http://localhost:3000${oldPath}`;
  }
}
