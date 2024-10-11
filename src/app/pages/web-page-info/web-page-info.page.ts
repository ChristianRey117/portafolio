import { Component, OnInit } from '@angular/core';
import { ICardWebSite } from 'src/app/interfaces/card-interface/card.interface';

@Component({
  selector: 'app-web-page-info',
  templateUrl: './web-page-info.page.html',
  styleUrls: ['./web-page-info.page.scss'],
})
export class WebPageInfoPage implements OnInit {
  cards: Array<ICardWebSite> = [
    {
      id: 1,
      image: '/assets/images/pizza-planeta.png',
      title: 'Pizza Planeta',
      subtitle: 'React - Nodejs',
      summary:
        'Pizza Planeta is a web site to order pizzas and save data of clients',
      imagesProyect: [
        '/assets/images/pizza-planeta/image1.png',
        '/assets/images/pizza-planeta/image2.png',
        '/assets/images/pizza-planeta/image3.png',
      ],
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
