import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex/pokedex.service';
import { coloresPorTipo } from '../components/pokemon-data/pokemon-data.component';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  id: number = this.pokedex.getPokemonID();
  type: string = this.pokedex.getPokemonType();

  constructor(private pokedex: PokedexService) { }
  color = coloresPorTipo
  ngOnInit() {
  }

}
