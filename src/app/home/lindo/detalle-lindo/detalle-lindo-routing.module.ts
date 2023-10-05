import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleLindoPage } from './detalle-lindo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleLindoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleLindoPageRoutingModule {}
