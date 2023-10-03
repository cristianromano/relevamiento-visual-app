import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPage } from './registro.page';
import { LoginPage } from '../login.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPage,
  },

  { path: 'login', component: LoginPage },
  {
    path: 'home',
    loadChildren: () =>
      import('../../../home/home.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPageRoutingModule {}
