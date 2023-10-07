import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LindoPageRoutingModule } from './lindo-routing.module';

import { LindoPage } from './lindo.page';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LindoPageRoutingModule,
    NgApexchartsModule,
  ],
  declarations: [LindoPage],
})
export class LindoPageModule {}
