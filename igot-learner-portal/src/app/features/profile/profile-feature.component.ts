import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'igot-profile-feature',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatDividerModule,
    MatChipsModule,
    MatProgressBarModule,
  ],
  templateUrl: './profile-feature.component.html',
  styleUrls: ['./profile-feature.component.scss'],
})
export class ProfileFeatureComponent {
  user = {
    name: 'Rajesh Kumar',
    designation: 'Under Secretary',
    department: 'Ministry of Electronics & IT',
    email: 'rajesh.kumar@gov.in',
    location: 'New Delhi',
    joinedDate: 'March 2019',
    avatar: '',
    completedCourses: 24,
    inProgressCourses: 3,
    totalHours: 186,
    certificates: 12,
  };

  competencies = [
    { name: 'Digital Governance', level: 85 },
    { name: 'Data Analytics', level: 72 },
    { name: 'Public Policy', level: 90 },
    { name: 'Leadership', level: 68 },
    { name: 'Communication', level: 78 },
  ];

  recentActivities = [
    { action: 'Completed', item: 'Ethics in Public Administration', date: '2 days ago', icon: 'check_circle' },
    { action: 'Enrolled in', item: 'Advanced Data Analytics', date: '1 week ago', icon: 'school' },
    { action: 'Earned certificate', item: 'Cybersecurity Fundamentals', date: '2 weeks ago', icon: 'workspace_premium' },
    { action: 'Started', item: 'Project Management Foundation', date: '3 weeks ago', icon: 'play_circle' },
  ];
}
