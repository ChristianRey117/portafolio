import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import Project from 'src/app/interfaces/project/project.interface';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, BadgeModule, ChipModule, ButtonModule],
})
export class ProjectsSectionComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Project 1',
      description:
        'A cutting-edge web application built with Angular and Node.js.',
      category: 'Web Development',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400',
      date: '2024-05-15',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Project 2',
      description:
        'A mobile application for task management using React Native.',
      category: 'Mobile Development',
      technologies: ['React Native', 'Firebase', 'Expo'],
      image: 'https://via.placeholder.com/600x400',
      date: '2024-03-20',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Project 3',
      description:
        'A simple blog built with a static site generator like Next.js.',
      category: 'Web Development',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL'],
      image: 'https://via.placeholder.com/600x400',
      date: '2023-11-10',
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Project 4',
      description:
        'An e-commerce platform with a focus on user experience and performance.',
      category: 'Web Development',
      technologies: ['Angular', 'NgRx', 'Bootstrap', 'REST API'],
      image: 'https://via.placeholder.com/600x400',
      date: '2023-08-01',
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Project 5',
      description: 'A small game prototype developed with Unity and C#.',
      category: 'Game Development',
      technologies: ['Unity', 'C#', 'Blender'],
      image: 'https://via.placeholder.com/600x400',
      date: '2023-05-25',
      github: '#',
      demo: '#',
      featured: false,
    },
  ];

  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor() {}

  ngOnInit(): void {
    // Inicializa las categorías únicas de los proyectos
    const uniqueCategories = new Set(this.projects.map((p) => p.category));
    this.categories = ['All', ...Array.from(uniqueCategories)];
  }

  // Método para filtrar proyectos
  get filteredProjects(): Project[] {
    return this.projects.filter((project) => {
      return (
        this.selectedCategory === 'All' ||
        project.category === this.selectedCategory
      );
    });
  }

  get featuredProjects(): Project[] {
    return this.filteredProjects.filter((project) => project.featured);
  }

  // Métodos para las estadísticas
  getTotalProjects(): number {
    return this.projects.length;
  }

  getProjectsByCategory(category: string): number {
    return this.projects.filter((p) => p.category === category).length;
  }

  getUniqueTechnologies(): number {
    console.log(this.projects);
    const technologies = this.projects?.flatMap((p) => p.technologies);
    return new Set(technologies).size;
  }
}
