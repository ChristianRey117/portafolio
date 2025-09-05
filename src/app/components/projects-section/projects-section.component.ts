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
      title: 'Froggy',
      description:
        'Video game developed in Unity where the player controls a frog to cross a busy road and a river, avoiding obstacles and reaching the goal safely.',
      category: 'Mobile Development',
      technologies: ['Unity', 'C#', 'UI'],
      image: './assets/images/froggy/froggy.png',
      date: '2025-08-01',
      github: 'https://github.com/ChristianRey117/unity-ranito',
      demo: 'https://play.google.com/store/apps/details?id=com.smart.connection.froggy&hl=es_MX',
      featured: true,
    },
    {
      title: 'Country Rich (Frontend)',
      description:
        'Web application that provides information about countries around the world.',
      category: 'Web Development',
      technologies: ['Angular', 'TypeScript', 'REST API', 'CSS'],
      image: './assets/images/country-rich/country-rich.png',
      date: '2025-07-01',
      github: 'https://github.com/ChristianRey117/country-rich',
      demo: 'https://country-rich.netlify.app',
      featured: true,
    },
    {
      title: 'Country Rich (Backend)',
      description:
        'Backend service for the Country Rich application, providing country data through a RESTful API.',
      category: 'Backend Development',
      technologies: ['Node', 'Mysql', 'Stripe', 'Express'],
      image: './assets/images/country-rich/country-rich-back.png',
      date: '2025-07-01',
      github: 'https://github.com/ChristianRey117/country-rich-back',
      featured: false,
    },
    {
      title: 'Escape Room',
      description:
        'Video game developed in Unity where players solve puzzles and find clues to escape from a locked room within a time limit.',
      category: 'Mobile Development',
      technologies: ['Unity', 'C#', '2D', 'UI'],
      image: './assets/images/escape-room/escape-room.png',
      date: '2024-08-01',
      github: 'https://github.com/ChristianRey117/unity-espace-room',
      featured: true,
    },
    {
      title: 'Pizza Planet',
      description:
        'Website for a fictional pizza restaurant called Pizza Planet.',
      category: 'Web Development',
      technologies: ['React', 'Tailwind', 'Figma'],
      image: './assets/images/pizza-planeta/pizza-planet.png',
      date: '2023-05-25',
      github: 'https://github.com/ChristianRey117/pizza-planet-client',
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
