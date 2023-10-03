import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'lindo',
    loadChildren: () =>
      import('./lindo/lindo.module').then((m) => m.LindoPageModule),
  },
  {
    path: 'feo',
    loadChildren: () => import('./feo/feo.module').then((m) => m.FeoPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
