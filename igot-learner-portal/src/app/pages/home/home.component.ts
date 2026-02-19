import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

import { ThemeService } from '@igot/design-system';
import {
  PageContainerComponent,
  SectionContainerComponent,
  ResponsiveGridComponent,
} from '@igot/design-system';

@Component({
  selector: 'igot-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatDividerModule,
    PageContainerComponent,
    SectionContainerComponent,
    ResponsiveGridComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly themeService = inject(ThemeService);

  /** Zoom-aware breakpoints reference (from attached specification) */
  breakpoints = [
    { zoom: '100%',  width: '1280px', tw: '6xl', layout: 'Base Desktop' },
    { zoom: '125%',  width: '1024px', tw: '4xl', layout: 'Small Desktop / Tablet Landscape' },
    { zoom: '150%',  width: '853px',  tw: '2xl', layout: 'Tablet Portrait' },
    { zoom: '200%',  width: '640px',  tw: 'lg',  layout: 'Large Mobile / Phablet' },
    { zoom: '300%',  width: '426px',  tw: 'sm',  layout: 'Standard Smartphone' },
    { zoom: '400%',  width: '320px',  tw: 'xs',  layout: 'Minimum Mobile (WCAG Reflow)' },
  ];

  /** Font size scale reference (from attached specification) */
  fontSizes = [
    { px: '48px', pct: '300%',   rem: '3.0 rem',   cssVar: '--text-7xl' },
    { px: '44px', pct: '275%',   rem: '2.75 rem',  cssVar: '--text-6xl' },
    { px: '40px', pct: '250%',   rem: '2.5 rem',   cssVar: '--text-5xl' },
    { px: '36px', pct: '225%',   rem: '2.25 rem',  cssVar: '--text-4xl' },
    { px: '32px', pct: '200%',   rem: '2.0 rem',   cssVar: '--text-3xl' },
    { px: '28px', pct: '175%',   rem: '1.75 rem',  cssVar: '--text-2xl' },
    { px: '24px', pct: '150%',   rem: '1.5 rem',   cssVar: '--text-xl' },
    { px: '20px', pct: '125%',   rem: '1.25 rem',  cssVar: '--text-lg' },
    { px: '16px', pct: '100%',   rem: '1.0 rem',   cssVar: '--text-base' },
    { px: '14px', pct: '87.5%',  rem: '0.875 rem', cssVar: '--text-sm' },
    { px: '12px', pct: '75%',    rem: '0.75 rem',  cssVar: '--text-xs' },
    { px: '10px', pct: '62.5%',  rem: '0.625 rem', cssVar: '--text-2xs' },
    { px: '8px',  pct: '50%',    rem: '0.5 rem',   cssVar: '--text-3xs' },
  ];

  courses = [
    {
      title: 'Digital Governance Essentials',
      category: 'Governance',
      description:
        'Understand the fundamentals of digital transformation in government services and public administration.',
      duration: '8 hours',
      level: 'Beginner',
    },
    {
      title: 'Data-Driven Decision Making',
      category: 'Data Science',
      description:
        'Learn to leverage data analytics for evidence-based policy formulation and program evaluation.',
      duration: '12 hours',
      level: 'Intermediate',
    },
    {
      title: 'Cybersecurity for Public Sector',
      category: 'Security',
      description:
        'Master the essential cybersecurity practices for protecting government digital infrastructure.',
      duration: '10 hours',
      level: 'Advanced',
    },
    {
      title: 'Public Policy & Innovation',
      category: 'Policy',
      description:
        'Explore innovative approaches to public policy design using design thinking and agile methodologies.',
      duration: '6 hours',
      level: 'Beginner',
    },
    {
      title: 'Leadership in Digital Age',
      category: 'Leadership',
      description:
        'Develop leadership skills to drive organizational change in the era of digital transformation.',
      duration: '15 hours',
      level: 'Intermediate',
    },
    {
      title: 'AI for Government Services',
      category: 'AI & ML',
      description:
        'Discover how artificial intelligence can improve efficiency and citizen experience in public services.',
      duration: '20 hours',
      level: 'Advanced',
    },
  ];
}
