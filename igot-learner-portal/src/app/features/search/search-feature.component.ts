import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'igot-search-feature',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSelectModule,
  ],
  templateUrl: './search-feature.component.html',
  styleUrls: ['./search-feature.component.scss'],
})
export class SearchFeatureComponent {
  searchQuery = '';
  selectedCategory = 'all';

  categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'governance', label: 'Governance' },
    { value: 'leadership', label: 'Leadership' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'ethics', label: 'Ethics & Compliance' },
    { value: 'technology', label: 'Technology' },
  ];

  trendingTags = [
    'Digital India',
    'Mission Karmayogi',
    'Data Privacy',
    'AI in Governance',
    'Ethical Leadership',
    'Public Policy',
  ];

  searchResults = [
    {
      title: 'Introduction to AI in Public Services',
      provider: 'iGOT Academy',
      type: 'Course',
      duration: '10 hours',
      rating: 4.5,
      enrolled: 15230,
      icon: 'smart_toy',
    },
    {
      title: 'Financial Management for Government',
      provider: 'NIFM',
      type: 'Program',
      duration: '24 hours',
      rating: 4.3,
      enrolled: 8420,
      icon: 'account_balance',
    },
    {
      title: 'Cybersecurity Awareness',
      provider: 'NIC',
      type: 'Course',
      duration: '6 hours',
      rating: 4.7,
      enrolled: 22100,
      icon: 'security',
    },
    {
      title: 'Effective Communication Skills',
      provider: 'ISTM',
      type: 'Course',
      duration: '8 hours',
      rating: 4.2,
      enrolled: 11500,
      icon: 'record_voice_over',
    },
    {
      title: 'RTI Act and Implementation',
      provider: 'CIC',
      type: 'Course',
      duration: '4 hours',
      rating: 4.6,
      enrolled: 9800,
      icon: 'gavel',
    },
  ];

  onSearch(): void {
    // Search logic would go here
  }
}
