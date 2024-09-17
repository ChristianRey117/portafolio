import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPageInfoPage } from './web-page-info.page';
import { WebSiteIdComponent } from 'src/app/components/web-site-id/web-site-id.component';

const routes: Routes = [
  {
    path: '',
    component: WebPageInfoPage,
  },
  {
    path: 'id/:id',
    component: WebSiteIdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebPageInfoPageRoutingModule {}
