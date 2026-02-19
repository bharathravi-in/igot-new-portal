import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'igot-home-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './home-feature.component.html',
  styleUrls: ['./home-feature.component.scss'],
})
export class HomeFeatureComponent {
  bannerTitle = 'Welcome to iGOT Karmayogi';
  bannerSubtitle = 'Empowering Civil Servants through Continuous Learning';

  featuredCourses = [
    {
      title: 'Digital Governance Essentials',
      category: 'Governance',
      description: 'Fundamentals of digital transformation in government services.',
      duration: '8 hours',
      level: 'Beginner',
      icon: 'school',
    },
    {
      title: 'Data-Driven Decision Making',
      category: 'Data Science',
      description: 'Leverage data analytics for evidence-based policy formulation.',
      duration: '12 hours',
      level: 'Intermediate',
      icon: 'analytics',
    },
    {
      title: 'Public Service Leadership',
      category: 'Leadership',
      description: 'Build leadership capabilities for effective public service delivery.',
      duration: '16 hours',
      level: 'Advanced',
      icon: 'groups',
    },
    {
      title: 'Ethics in Governance',
      category: 'Ethics',
      description: 'Understanding ethical frameworks for transparent governance.',
      duration: '6 hours',
      level: 'Beginner',
      icon: 'balance',
    },
  ];

  quickLinks = [
    { label: 'My Learning', icon: 'menu_book', route: '/my-learning' },
    { label: 'Explore Courses', icon: 'explore', route: '/search' },
    { label: 'My Profile', icon: 'person', route: '/profile' },
    { label: 'Certificates', icon: 'workspace_premium', route: '/toc' },
  ];
}
