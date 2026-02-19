import { Routes } from '@angular/router';

/**
 * Application routes for the iGOT Learner Portal.
 *
 * These routes serve two purposes:
 * 1. Standalone app navigation (when served directly on port 4200)
 * 2. Feature isolation — each feature is also exposed as a Web Component
 *    via Module Federation for consumption by the Angular 16 host
 */
export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home-feature.component').then(
        (m) => m.HomeFeatureComponent,
      ),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./features/search/search-feature.component').then(
        (m) => m.SearchFeatureComponent,
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile-feature.component').then(
        (m) => m.ProfileFeatureComponent,
      ),
  },
  {
    path: 'my-learning',
    loadComponent: () =>
      import('./features/my-learning/my-learning-feature.component').then(
        (m) => m.MyLearningFeatureComponent,
      ),
  },
  {
    path: 'toc',
    loadComponent: () =>
      import('./features/toc/toc-feature.component').then(
        (m) => m.TocFeatureComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
