import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainerCardPageRoutingModule } from './trainer-card-routing.module';

import { TrainerCardPage } from './trainer-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainerCardPageRoutingModule
  ],
  declarations: [TrainerCardPage]
})
export class TrainerCardPageModule {}
