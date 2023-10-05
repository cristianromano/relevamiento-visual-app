import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleFeoPageRoutingModule } from './detalle-feo-routing.module';

import { DetalleFeoPage } from './detalle-feo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleFeoPageRoutingModule
  ],
  declarations: [DetalleFeoPage]
})
export class DetalleFeoPageModule {}
