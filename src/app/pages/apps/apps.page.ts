import { Component, OnInit } from '@angular/core';
import { ICardWebSite } from 'src/app/interfaces/card-interface/card.interface';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {
  cards: Array<ICardWebSite> = [
    {
      id: 1,
      image: '/assets/images/retrato.jpg',
      title: 'TITLE',
      subtitle: 'SUBTITLE',
      summary: 'SUMMARY',
    },
    {
      id: 2,
      image: '/assets/images/retrato.jpg',
      title: 'TITLE',
      subtitle: 'SUBTITLE',
      summary: 'SUMMARY',
    },
    {
      id: 3,
      image: '/assets/images/retrato.jpg',
      title: 'TITLE',
      subtitle: 'SUBTITLE',
      summary: 'SUMMARY',
    },
    {
      id: 4,
      image: '/assets/images/retrato.jpg',
      title: 'TITLE',
      subtitle: 'SUBTITLE',
      summary: 'SUMMARY',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
