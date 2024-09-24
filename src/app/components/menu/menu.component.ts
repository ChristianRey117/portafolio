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
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Web sites', url: '/web-sites', icon: 'paper-plane' },
    { title: 'Unity', url: '/unity', icon: 'heart' },
    { title: 'Apps', url: '/apps', icon: 'archive' },
    { title: 'Contact', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  ngOnInit() {}
}
