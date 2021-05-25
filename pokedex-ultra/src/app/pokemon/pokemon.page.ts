import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex/pokedex.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  id: number = this.pokedex.getPokemonID();
  type: string = this.pokedex.getPokemonType();

  constructor(private pokedex: PokedexService) { }
  ngOnInit() {
    console.log(this.id)
    console.log(this.type)
  
  }

}
