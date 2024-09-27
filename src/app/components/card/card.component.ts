import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ICardWebSite } from 'src/app/interfaces/card-interface/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CardComponent implements OnInit {
  @Input() cardWebSite: ICardWebSite;
  constructor(private readonly _router: Router) {}

  ngOnInit() {}

  goToWebSite(id: number) {
    this._router.navigate(['/proyect/id/' + id], { replaceUrl: true });
  }
}
