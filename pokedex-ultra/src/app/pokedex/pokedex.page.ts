import { Component, OnInit } from '@angular/core';
import {PokedexService} from './pokedex.service';
import { GenerationsService } from '../generations/generations.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  pokemonArray = [];
  limit: number = 0;
  constructor(
    private api: PokedexService,
    private genService: GenerationsService,
  ) { }

  ngOnInit() {
    let generation = this.genService.getGeneration();
    switch(generation){
      case 1: {
        this.getGenI();
      }
      case 1: {
        this.getGenI();
      }
      case 2: {
        this.getGenII();
      }
      case 3: {
        this.getGenIII();
      }
      case 4: {
        this.getGenIV();
      }
      case 5: {
        this.getGenV();
      }
      case 6: {
        this.getGenVI();
      }
      case 7: {
        this.getGenVII();
      }
      case 8: {
        this.getGenVIII();
      }
    }
  }

  

  getGenI(){
    let pokeData;
    for (let index = 1; index < 152; index++) {
      this.api.getPokemones(index).subscribe(
          (res) =>{ 
            let urlImagen = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
            for (let j = index.toString().length; j < 3; ++j) {
              urlImagen += '0';
            }
            urlImagen += index + '.png';
            pokeData = {
              position: index,
              image: urlImagen,
              name: res.name.charAt(0).toUpperCase() + res.name.slice(1),
              type: res.types.map((index) => {
                return (index.type.name.charAt(0).toUpperCase() + index.type.name.slice(1));
              }),
              //type: res.types[0].type.name,
            };

            this.pokemonArray.push(pokeData);
          },
          (err) =>{
            console.log(err)
          }
        );     
    }
  }
  
  getGenII(){
    for (let index = 152; index < 252; index++) {
      this.api.getPokemones(index).subscribe(
          (res) =>{ 
            this.pokemonArray.push(res);
          },
          (err) =>{
            console.log(err)
          }
        );     
    }
  }

  getGenIII(){
    for (let index = 252; index < 387; index++) {
      this.api.getPokemones(index).subscribe(
          (res) =>{ 
            this.pokemonArray.push(res);
          },
          (err) =>{
            console.log(err)
          }
        );     
    }
  }

  getGenIV(){
    for (let index = 387; index < 494; index++) {
      this.api.getPokemones(index).subscribe(
          (res) =>{ 
            this.pokemonArray.push(res);
          },
          (err) =>{
            console.log(err)
          }
        );     
    }
  }


  getGenV(){
    for (let index = 494; index < 650; index++) {
      this.api.getPokemones(index).subscribe(
          (res) =>{ 
            this.pokemonArray.push(res);
          },
          (err) =>{
            console.log(err)
          }
        );     
    }
  }


  getGenVI(){
    for (let index = 650; index < 722; index++) {
      this.api.getPokemones(index).subscribe(
          (res) =>{ 
            this.pokemonArray.push(res);
          },
          (err) =>{
            console.log(err)
          }
        );     
    }
  }


  getGenVII(){
    for (let index = 722; index < 810; index++) {
      this.api.getPokemones(index).subscribe(
          (res) =>{ 
            this.pokemonArray.push(res);
          },
          (err) =>{
            console.log(err)
          }
        );     
    }
  }
  
  getGenVIII(){
    for (let index = 810; index < 899; index++) {
      this.api.getPokemones(index).subscribe(
          (res) =>{ 
            this.pokemonArray.push(res);
          },
          (err) =>{
            console.log(err)
          }
        );     
    }
  }



}
