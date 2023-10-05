import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LindoPage } from './lindo.page';

const routes: Routes = [
  {
    path: '',
    component: LindoPage,
  },
  {
    path: 'detalle/:id',
    loadChildren: () =>
      import('./detalle-lindo/detalle-lindo.module').then(
        (m) => m.DetalleLindoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LindoPageRoutingModule {}
