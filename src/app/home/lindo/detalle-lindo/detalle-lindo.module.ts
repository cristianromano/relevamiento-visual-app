import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleLindoPageRoutingModule } from './detalle-lindo-routing.module';

import { DetalleLindoPage } from './detalle-lindo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleLindoPageRoutingModule
  ],
  declarations: [DetalleLindoPage]
})
export class DetalleLindoPageModule {}
