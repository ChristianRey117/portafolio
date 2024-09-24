import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnityPage } from './unity.page';

const routes: Routes = [
  {
    path: '',
    component: UnityPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnityRoutingPageModule {}
