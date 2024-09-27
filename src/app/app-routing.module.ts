import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UnityPage } from './pages/unity/unity.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'proyect',
    loadChildren: () =>
      import('./pages/web-page-info/web-page-info.module').then(
        (m) => m.WebPageInfoPageModule
      ),
  },
  {
    path: 'unity',
    loadChildren: () =>
      import('./pages/unity/unity.module').then((m) => m.UnityPageModule),
  },
  {
    path: 'apps',
    loadChildren: () =>
      import('./pages/apps/apps.module').then((m) => m.AppsPageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
