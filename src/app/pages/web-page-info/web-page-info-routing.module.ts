import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPageInfoPage } from './web-page-info.page';

const routes: Routes = [
  {
    path: '',
    component: WebPageInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPageInfoPageRoutingModule {}
