import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  animations: [
    trigger('slideInLeft', [
      state('false', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('true', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('false => true', [animate('1000ms ease-out')]),
    ]),
    trigger('slideInRight', [
      state('false', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('true', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('false => true', [animate('1000ms ease-out')]),
    ]),
  ],
})
export class HeroSectionComponent implements OnInit {
  isVisible: boolean = false;

  constructor(private primengConfig: PrimeNG) {}

  ngOnInit() {
    this.primengConfig.ripple.set(true);

    // Simular que el componente se hace visible después de un momento
    setTimeout(() => {
      this.isVisible = true;
    }, 500);
  }
}
