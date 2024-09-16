import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Web sites', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Unity', url: '/folder/favorites', icon: 'heart' },
    { title: 'Apps', url: '/folder/archived', icon: 'archive' },
    { title: 'Contact', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
