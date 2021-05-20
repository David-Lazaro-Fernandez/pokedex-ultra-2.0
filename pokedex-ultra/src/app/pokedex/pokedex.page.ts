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
  generations:number;
  constructor(
    private api: PokedexService,
    private genService: GenerationsService,
  ) { }

  ngOnInit() {
    this.generations = this.genService.getGeneration();
    console.log(this.generations)
    console.log(this.pokemonArray)
     switch(this.generations){
       
       case 1: {
         console.log("firstGen")
         this.getGenI();
         break;
        

       }
      case 2: {
         console.log("2Gen")
        this.getGenII();
         break;
        }
        case 3: {
         console.log("3Gen")
         this.getGenIII();
         break;
       }
       case 4: {
         console.log("4Gen")
         this.getGenIV();
         break;
       }
       case 5: {
         console.log("5Gen")
         this.getGenV();
         break;
       }
       case 6: {
         console.log("6Gen")
         this.getGenVI();
         break;
       }
       case 7: {
         console.log("7Gen")
         this.getGenVII();
         break;
       }
       case 8: {
         console.log("8gen")
         this.getGenVIII();
         break;
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
            this.pokemonArray.sort(function (a, b) {
              return a.position - b.position;
            });
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
