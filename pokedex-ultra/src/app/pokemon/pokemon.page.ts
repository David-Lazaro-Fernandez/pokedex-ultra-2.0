import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex/pokedex.service';
import { PokemonService} from './pokemon.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  id: number = this.pokedex.getPokemonID();
  type: string = this.pokedex.getPokemonType();
  pokemonArray = []
  constructor(private pokedex: PokedexService, private pokemonService: PokemonService, private router: Router) { }
  ngOnInit() {
    this.getPokemonData()   
    this.pokemonService.setPokemonData(this.pokemonArray)
  }
  ruta(){
    console.log("Test")
    this.router.navigate(['/generations'])
  }

  getPokemonData(){
    let pokeData;
    this.pokedex.getPokemones(this.id).subscribe(
      (res) =>{ 
        let urlImagen = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
        for (let j = this.id.toString().length; j < 3; ++j) {
          urlImagen += '0';
        }
        urlImagen += this.id + '.png';
        pokeData = {
          position: this.id,
          image: urlImagen,
          name: res.name.charAt(0).toUpperCase() + res.name.slice(1),
          type: res.types.map((index) => {
            return (index.type.name.charAt(0).toUpperCase() + index.type.name.slice(1));
          }),
          stats: res.stats,
          //type: res.types[0].type.name,
        };

        this.pokemonArray.push(pokeData);
        this.pokemonArray.sort(function (a, b) {
          return a.position - b.position;
        });
      },
      (err) =>{
        console.log(err)
      }
    )
  }

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

