import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeoPage } from './feo.page';

const routes: Routes = [
  {
    path: '',
    component: FeoPage,
  },
  {
    path: 'detalle-feo/:id',
    loadChildren: () =>
      import('./detalle-feo/detalle-feo.module').then(
        (m) => m.DetalleFeoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeoPageRoutingModule {}
