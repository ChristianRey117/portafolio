import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import Experience from 'src/app/interfaces/experiences/experiences.interface';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule],
})
export class WorkExperienceComponent implements OnInit {
  // Datos de ejemplo para la experiencia laboral
  experiences: Experience[] = [
    {
      title: 'Custom Software Engineer',
      company: 'Accenture',
      period: 'Mar 2023 - Present',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'React', 'SQL'],
      achievements: [
        'Implemented new critical workflows in the application, optimizing processes by 20% and reducing response times.',
        'Designed and implemented an intuitive user interface that increased user satisfaction by 18%, according to feedback surveys.',
        'Developed and implemented a demo version without backend requests for new users.',
        'Technologies used: Angular, Ionic, PrimeNg, RXJS, Cordova, agile methodologies (Scrum).',
      ],
    },
    {
      title: 'InternShip Frontend Developer',
      company: 'Accenture',
      period: 'Sep 2022 - Mar 2023',
      technologies: ['Angular', 'TypeScript', 'Primeng', 'Rxjs', 'Figma'],
      achievements: [
        'Design and layout of web components with Angular and Primeng.',
        'Optimized web application performance, reducing loading times by 20%.',
        'Collaboration with the design team to transform Figma mockups into functional interfaces.',
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
