import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'igot-my-learning-feature',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
    MatChipsModule,
  ],
  templateUrl: './my-learning-feature.component.html',
  styleUrls: ['./my-learning-feature.component.scss'],
})
export class MyLearningFeatureComponent {
  inProgressCourses = [
    {
      title: 'Advanced Data Analytics for Policy',
      provider: 'iGOT Academy',
      progress: 65,
      lastAccessed: '2 hours ago',
      duration: '24 hours',
      icon: 'analytics',
    },
    {
      title: 'Project Management Foundation',
      provider: 'ISTM',
      progress: 30,
      lastAccessed: '1 day ago',
      duration: '16 hours',
      icon: 'assignment',
    },
    {
      title: 'Hindi Pragya for Officers',
      provider: 'DoPT',
      progress: 80,
      lastAccessed: '3 days ago',
      duration: '10 hours',
      icon: 'translate',
    },
  ];

  completedCourses = [
    {
      title: 'Ethics in Public Administration',
      provider: 'LBSNAA',
      completedDate: '15 Oct 2024',
      score: 92,
      certificate: true,
      icon: 'balance',
    },
    {
      title: 'Cybersecurity Fundamentals',
      provider: 'NIC',
      completedDate: '28 Sep 2024',
      score: 88,
      certificate: true,
      icon: 'security',
    },
    {
      title: 'Digital Governance Essentials',
      provider: 'MeitY',
      completedDate: '10 Sep 2024',
      score: 95,
      certificate: true,
      icon: 'school',
    },
    {
      title: 'RTI Act and Implementation',
      provider: 'CIC',
      completedDate: '20 Aug 2024',
      score: 78,
      certificate: false,
      icon: 'gavel',
    },
  ];
}
