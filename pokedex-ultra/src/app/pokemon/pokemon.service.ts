import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonArray = []
  constructor() { }

  setPokemonData(array){
    this.pokemonArray = array
  }
  getPokemonData(){
    return this.pokemonArray
  }
}
