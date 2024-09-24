import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnityPage } from './unity.page';
import { UnityRoutingPageModule } from './unity-routing.module';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnityRoutingPageModule,
    CardComponent,
  ],
  declarations: [UnityPage],
})
export class UnityPageModule {}
