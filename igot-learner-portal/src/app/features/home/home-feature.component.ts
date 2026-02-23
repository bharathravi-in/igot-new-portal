import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import {
  PageContainerComponent,
  SectionContainerComponent,
  ResponsiveGridComponent,
} from '@igot/design-system';
import { CrossPortalNavService } from '../../services/cross-portal-nav.service';
import { UserService } from '../../services/user.service';
import { UserResponse } from '../../models/user.model';

@Component({
  selector: 'igot-home-feature',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule, MatButtonModule, MatIconModule, MatChipsModule,
    MatProgressBarModule, MatProgressSpinnerModule, MatDividerModule,
    PageContainerComponent, SectionContainerComponent, ResponsiveGridComponent,
  ],
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.scss'],
})
export class HomeFeatureComponent implements OnInit {
  private readonly crossPortalNav = inject(CrossPortalNavService);
  private readonly router = inject(Router);
  private readonly userService = inject(UserService);

  // User profile state
  user = signal<UserResponse | null>(null);
  userLoading = signal(true);
  userError = signal(false);

  get bannerTitle(): string {
    const name = this.user()?.firstName;
    return name ? `Welcome back, ${name}!` : 'Welcome to iGOT Karmayogi';
  }

  bannerSubtitle = 'Empowering Civil Servants through Continuous Learning';

  featuredCourses = [
    {
      title: 'Digital Governance Essentials',
      category: 'Governance',
      description: 'Fundamentals of digital transformation in government services.',
      duration: '8 hours',
      level: 'Beginner',
      icon: 'school',
      courseId: 'do_1144505646531461121258',
    },
    {
      title: 'Data-Driven Decision Making',
      category: 'Data Science',
      description: 'Leverage data analytics for evidence-based policy formulation.',
      duration: '12 hours',
      level: 'Intermediate',
      icon: 'analytics',
      courseId: 'do_1144505646531461121258',
    },
    {
      title: 'Public Service Leadership',
      category: 'Leadership',
      description: 'Build leadership capabilities for effective public service delivery.',
      duration: '16 hours',
      level: 'Advanced',
      icon: 'groups',
      courseId: 'do_1144505646531461121258',
    },
    {
      title: 'Ethics in Governance',
      category: 'Ethics',
      description: 'Understanding ethical frameworks for transparent governance.',
      duration: '6 hours',
      level: 'Beginner',
      icon: 'balance',
      courseId: 'do_1144505646531461121258',
    },
  ];

  enrollInCourse(courseId: string): void {
    this.crossPortalNav.navigateToToc(courseId, 'overview');
  }

  quickLinks = [
    { label: 'My Learning', icon: 'menu_book', route: '/my-learning' },
    { label: 'Explore Courses', icon: 'explore', route: '/search' },
    { label: 'My Profile', icon: 'person', route: '/profile' },
    { label: 'Certificates', icon: 'workspace_premium', route: '/toc' },
  ];

  /**
   * Navigate within the new portal using the Angular hash router.
   * No full page reload — smooth SPA navigation.
   */
  navigateQuickLink(route: string): void {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.userService.fetchCurrentUser().subscribe({
      next: (userData) => {
        this.user.set(userData);
        this.userLoading.set(false);
      },
      error: () => {
        this.userError.set(true);
        this.userLoading.set(false);
      },
    });
  }
}
