import { Component, OnInit } from '@angular/core';
import {
  categories,
  experiences,
  projects,
  skills,
} from 'src/app/constantes/data-home';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'mail' },
    { title: 'Web sites', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Unity', url: '/folder/favorites', icon: 'heart' },
    { title: 'Apps', url: '/folder/archived', icon: 'archive' },
    { title: 'Contact', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  skills = skills;
  experiences = experiences;
  projects = projects;
  categories = categories;

  constructor() {}

  ngOnInit() {}
}
