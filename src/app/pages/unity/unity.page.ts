import { Component, OnInit } from '@angular/core';
import { ICardWebSite } from 'src/app/interfaces/card-interface/card.interface';

@Component({
  selector: 'app-unity',
  templateUrl: './unity.page.html',
  styleUrls: ['./unity.page.scss'],
})
export class UnityPage implements OnInit {
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
