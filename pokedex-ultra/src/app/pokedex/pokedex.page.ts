import { Component, OnInit } from '@angular/core';
import {PokedexService} from './pokedex.service';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  pokemonArray = [];
  constructor(private api: PokedexService) { }

  ngOnInit() {
  }

  getGenI(){
    for (let index = 1; index < 152; index++) {
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
