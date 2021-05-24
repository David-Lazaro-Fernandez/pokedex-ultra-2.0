import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

import { PokemonPage } from './pokemon.page';
import { PokemonDataComponent } from '../components/pokemon-data/pokemon-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule
  ],
  declarations: [PokemonPage, PokemonDataComponent]
})
export class PokemonPageModule {}
