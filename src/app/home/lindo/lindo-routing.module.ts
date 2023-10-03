import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LindoPage } from './lindo.page';

const routes: Routes = [
  {
    path: '',
    component: LindoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LindoPageRoutingModule {}
