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
      { name: 'Spanish', level: 97 },
      { name: 'English', level: 89 },
    ],
    technical: [
      { name: 'Angular', level: 92 },
      { name: 'React / TypeScript', level: 90 },
    ],
    soft: [
      'Problem Solving',
      'Team Leadership',
      'Agile Methodologies',
      'Critical Thinking',
    ],
  };
}
