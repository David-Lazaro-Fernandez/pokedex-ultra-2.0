import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerationsPage } from './generations.page';
import {HomePage} from '../home/home.page';
import {PokedexPage} from '../pokedex/pokedex.page';
const routes: Routes = [
  {
    path: '',
    component: GenerationsPage
  },
  {
    path:'home',
    component: HomePage
  },
  {
    path:'pokedex',
    component: PokedexPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerationsPageRoutingModule {}
