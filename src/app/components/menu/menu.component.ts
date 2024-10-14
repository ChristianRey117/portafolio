import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class MenuComponent implements OnInit {
  public appPages = [
    { title: 'Web sites', url: '/proyect', icon: 'desktop' },
    { title: 'Unity', url: '/unity', icon: 'game-controller' },
    { title: 'Apps', url: '/apps', icon: 'apps' },
    { title: 'Contact', url: '/contact', icon: 'call' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  ngOnInit() {}
}
