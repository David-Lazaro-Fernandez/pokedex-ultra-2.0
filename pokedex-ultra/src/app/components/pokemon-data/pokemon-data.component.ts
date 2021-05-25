import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../../pokemon/pokemon.service'
@Component({
  selector: 'Pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss'],
})
export class PokemonDataComponent implements OnInit{
  colores = coloresPorTipo
  pokemonArray = []
  
  @Input() tipo = coloresPorTipo.Bug
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(){
    this.pokemonArray = this.pokemonService.getPokemonData()
    console.log("Pokemon with stats")
    console.log(this.pokemonArray) 
  }

  // changeStatNames(){
  //   this.pokemonArray.
  // }

  
  
  
  
}

const coloresPorTipo = {
  Bug : "#C0DE8E",
  Dark : "#373737",
  Dragon : "#692BCF",
  Electric : "#D8B500",
  Fairy : "#D37ECB",
  Fighting : "#F05030",
  Fire : "#F08A42",
  Flying : "#AED1D9",
  Ghost : "#807CB1",
  Grass : "#46D27E",
  Ground : "#C88555",
  Ice : "#89E3FF",
  Normal : "#A8A090",
  Poison : "#BF46D2",
  Psychic : "#FC62FF",
  Rock : "#97755D",
  Steel : "#ACACAC",
  Water : "#006ACC",
} 

