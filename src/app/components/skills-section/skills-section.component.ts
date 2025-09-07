import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import Language from 'src/app/interfaces/language/laguage.interface';
import TechnicalSkill from 'src/app/interfaces/technical-skill/technical-skill.interface';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, CardModule, ProgressBarModule, ChipModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent {
  skills = {
    languages: [
      { name: 'Spanish', level: 100, color: 'from-red-400 to-orange-500' },
      { name: 'French', level: 90, color: 'from-purple-400 to-pink-500' },
      { name: 'English', level: 75, color: 'from-green-400 to-blue-500' },
    ] as Language[],
    programingLanguages: [
      { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-orange-500' },
      { name: 'TypeScript', level: 90, color: 'from-blue-400 to-blue-600' },
      { name: 'C#', level: 75, color: 'from-purple-400 to-pink-500' },
      { name: 'Java', level: 60, color: 'from-red-400 to-orange-500' },
    ] as Language[],

    technical: [
      { name: 'Angular', level: 95, icon: '🅰️' },
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express', level: 80, icon: '🍃' },
      { name: 'MySQL', level: 85, icon: '🗄️' },
      { name: 'Unity', level: 75, icon: '🎮' },
      { name: 'AWS', level: 40, icon: '☁️' },
      { name: 'Git', level: 90, icon: '📝' },
    ] as TechnicalSkill[],

    soft: [
      'Problem Solving',
      'Team Leadership',
      'Communication',
      'Critical Thinking',
      'Time Management',
      'Adaptability',
      'Creativity',
      'Mentoring',
      'Project Management',
      'Continuous Learning',
    ],
  };

  getStarArray(level: number): number[] {
    return Array(5)
      .fill(0)
      .map((_, i) => (i < Math.floor(level / 20) ? 1 : 0));
  }

  getProgressBarClass(color: string): string {
    // Mapeo de colores de Tailwind a clases CSS personalizadas
    const colorMap: { [key: string]: string } = {
      'from-yellow-400 to-orange-500': 'progress-yellow-orange',
      'from-blue-400 to-blue-600': 'progress-blue',
      'from-green-400 to-blue-500': 'progress-green-blue',
      'from-red-400 to-orange-500': 'progress-red-orange',
      'from-purple-400 to-pink-500': 'progress-purple-pink',
    };
    return colorMap[color] || 'progress-default';
  }
}
