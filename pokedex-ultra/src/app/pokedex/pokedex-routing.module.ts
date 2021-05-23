import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexPage } from './pokedex.page';
import { GenerationsPage } from '../generations/generations.page'
const routes: Routes = [
  {
    path: '',
    component: PokedexPage
  },
  {
    path:'generations',
    component: GenerationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexPageRoutingModule {}
