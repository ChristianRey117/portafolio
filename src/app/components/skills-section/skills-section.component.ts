import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent {
  skills = {
    languages: [
      { name: 'Spanish', level: 100 },
      { name: 'French', level: 80 },
      { name: 'English', level: 80 },
    ],
    technical: [
      { name: 'Angular', level: 92 },
      { name: 'React / TypeScript', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Unity', level: 80 },
      { name: 'Ionic', level: 80 },
      { name: 'Cordova', level: 80 },
      { name: 'Git', level: 90 },
    ],
    soft: [
      'Problem Solving',
      'Team Leadership',
      'Agile Methodologies',
      'Critical Thinking',
      'Adaptability and Flexibility',
      'Curiosity and Initiative',
      'Teamwork',
      'Ethics and Responsibility',
    ],
  };
}
