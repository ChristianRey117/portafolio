import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebPageInfoPageRoutingModule } from './web-page-info-routing.module';

import { WebPageInfoPage } from './web-page-info.page';
import { CardComponent } from 'src/app/components/card/card.component';
import { WebSiteIdModule } from 'src/app/components/web-site-id/web-site-id.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebPageInfoPageRoutingModule,
    CardComponent,
    WebSiteIdModule,
  ],
  declarations: [WebPageInfoPage],
})
export class WebPageInfoPageModule {}
