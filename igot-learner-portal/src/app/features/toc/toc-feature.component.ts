import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'igot-toc-feature',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressBarModule,
  ],
  templateUrl: './toc-feature.component.html',
  styleUrls: ['./toc-feature.component.scss'],
})
export class TocFeatureComponent {
  course = {
    title: 'Digital Governance Essentials',
    provider: 'Ministry of Electronics & IT',
    description:
      'This comprehensive course covers the fundamentals of digital transformation in government services, e-governance frameworks, digital infrastructure, and citizen-centric service delivery models.',
    category: 'Governance',
    level: 'Beginner',
    duration: '8 hours',
    language: 'English',
    rating: 4.5,
    enrolled: 15230,
    lastUpdated: 'November 2024',
    icon: 'school',
  };

  modules = [
    {
      title: 'Module 1: Introduction to Digital Governance',
      duration: '1.5 hours',
      completed: true,
      lessons: [
        { title: 'What is Digital Governance?', duration: '20 min', type: 'video', completed: true },
        { title: 'E-Governance Frameworks', duration: '25 min', type: 'reading', completed: true },
        { title: 'Digital India Initiative', duration: '30 min', type: 'video', completed: true },
        { title: 'Quiz: Module 1', duration: '15 min', type: 'quiz', completed: true },
      ],
    },
    {
      title: 'Module 2: Digital Infrastructure',
      duration: '2 hours',
      completed: false,
      lessons: [
        { title: 'Government Cloud (GI Cloud)', duration: '25 min', type: 'video', completed: true },
        { title: 'National Data Centres', duration: '20 min', type: 'reading', completed: true },
        { title: 'API Setu & Integration', duration: '30 min', type: 'video', completed: false },
        { title: 'Hands-on: API Integration', duration: '30 min', type: 'lab', completed: false },
        { title: 'Quiz: Module 2', duration: '15 min', type: 'quiz', completed: false },
      ],
    },
    {
      title: 'Module 3: Citizen-Centric Services',
      duration: '2.5 hours',
      completed: false,
      lessons: [
        { title: 'Service Delivery Models', duration: '30 min', type: 'video', completed: false },
        { title: 'Unified Service Platform', duration: '25 min', type: 'reading', completed: false },
        { title: 'Case Study: DigiLocker', duration: '35 min', type: 'case-study', completed: false },
        { title: 'User Experience in Gov Apps', duration: '30 min', type: 'video', completed: false },
        { title: 'Quiz: Module 3', duration: '15 min', type: 'quiz', completed: false },
      ],
    },
    {
      title: 'Module 4: Final Assessment',
      duration: '2 hours',
      completed: false,
      lessons: [
        { title: 'Comprehensive Review', duration: '45 min', type: 'reading', completed: false },
        { title: 'Final Exam', duration: '60 min', type: 'quiz', completed: false },
        { title: 'Feedback & Certificate', duration: '15 min', type: 'other', completed: false },
      ],
    },
  ];

  getLessonIcon(type: string): string {
    switch (type) {
      case 'video': return 'play_circle';
      case 'reading': return 'menu_book';
      case 'quiz': return 'quiz';
      case 'lab': return 'science';
      case 'case-study': return 'cases';
      default: return 'article';
    }
  }

  getModuleProgress(mod: typeof this.modules[0]): number {
    const completed = mod.lessons.filter((l) => l.completed).length;
    return Math.round((completed / mod.lessons.length) * 100);
  }
}
