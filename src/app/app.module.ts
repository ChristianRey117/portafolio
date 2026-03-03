import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { HeaderComponent } from './components/header/header.component';
import { definePreset } from '@primeng/themes';

const theme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#FFDEF2',
      100: '#FFD4EE',
      200: '#FFBAE5',
      300: '#FFABDF',
      400: '#0077b6',
      500: '#0077b6',
      600: '#0077b6',
      700: '#520038',
      800: '#660046',
      900: '#4A1238',
      950: '#3B1C2F',
    },
    secondary: {
      50: '#FFDEF2',
      100: '#FFD4EE',
      200: '#FFBAE5',
      300: '#FFABDF',
      400: '#00b4d8',
      500: '#00b4d8',
      600: '#00b4d8',
    },
  },
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MenuComponent,
    HeaderComponent,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: theme,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
