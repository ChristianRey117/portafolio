import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSiteIdComponent } from './web-site-id.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [WebSiteIdComponent],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class WebSiteIdModule {}
