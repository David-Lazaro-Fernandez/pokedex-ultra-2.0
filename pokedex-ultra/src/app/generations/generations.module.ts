import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerationsPageRoutingModule } from './generations-routing.module';

import { GenerationsPage } from './generations.page';
import {GenerationsComponent} from '../components/generations/generations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerationsPageRoutingModule
  ],
  declarations: [GenerationsPage, GenerationsComponent]
})
export class GenerationsPageModule {}
