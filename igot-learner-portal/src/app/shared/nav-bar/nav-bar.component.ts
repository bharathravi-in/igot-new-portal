import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '@igot/design-system';

@Component({
  selector: 'igot-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  readonly themeService = inject(ThemeService);
  activeRoute = 'home';

  navItems = [
    { label: 'Home',        path: '/home',        icon: '🏠' },
    { label: 'Explore',     path: '/search',       icon: '🔍' },
    { label: 'My Learning', path: '/my-learning',  icon: '📚' },
    { label: 'Profile',     path: '/profile',      icon: '👤' },
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const seg = e.urlAfterRedirects.split('/')[1] || 'home';
        this.activeRoute = seg;
      });
    const seg = this.router.url.split('/')[1] || 'home';
    this.activeRoute = seg;
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
