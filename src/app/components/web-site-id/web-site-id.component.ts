import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICardWebSite } from 'src/app/interfaces/card-interface/card.interface';

@Component({
  selector: 'app-web-site-id',
  templateUrl: './web-site-id.component.html',
  styleUrls: ['./web-site-id.component.scss'],
})
export class WebSiteIdComponent implements OnInit {
  dataProyect: ICardWebSite =
    this._router.getCurrentNavigation()?.extras.state?.proyectInfo;
  constructor(private readonly _router: Router) {}

  ngOnInit() {
    console.log(this.dataProyect);
  }
}
