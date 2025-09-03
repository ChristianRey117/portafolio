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
      title: 'Full Stack Developer',
      company: 'Accenture',
      period: 'Sept 2023 - Feb 2024',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Spring Boot', 'SQL'],
      achievements: [
        'Desarrollo y mantenimiento de microservicios robustos en Java Spring Boot.',
        'Creación de interfaces de usuario interactivas y reactivas con Angular 15 y TypeScript.',
        'Implementación de pruebas unitarias y de integración para asegurar la calidad del código.',
        'Colaboración en un equipo ágil utilizando metodologías Scrum.',
      ],
    },
    {
      title: 'Front-end Developer',
      company: 'Innovatech Solutions',
      period: 'Feb 2023 - Sept 2023',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma'],
      achievements: [
        'Diseño y maquetación de componentes web con React y Tailwind CSS.',
        'Optimización del rendimiento de la aplicación web, reduciendo los tiempos de carga en un 20%.',
        'Colaboración con el equipo de diseño para convertir mockups de Figma en interfaces funcionales.',
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
