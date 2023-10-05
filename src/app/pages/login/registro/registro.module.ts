import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { HomePageModule } from 'src/app/home/home.module';
@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    HomePageModule,
  ],
  declarations: [RegistroPage],
})
export class RegistroPageModule {}
