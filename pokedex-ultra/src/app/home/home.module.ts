import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {CategoriesComponent} from '../components/categories/categories.component';
import {PokeNewsComponent} from '../components/poke-news/poke-news.component';
import {SearchBarComponent} from '../components/search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, CategoriesComponent, PokeNewsComponent, SearchBarComponent,]
})
export class HomePageModule {}
