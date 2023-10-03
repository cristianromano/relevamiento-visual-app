import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { LindoPageModule } from './lindo/lindo.module';
import { FeoPageModule } from './feo/feo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LindoPageModule,
    FeoPageModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
