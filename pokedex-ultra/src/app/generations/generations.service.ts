import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerationsService {
  generation: number;

  constructor() { }

  setGeneration(gen){
    this.generation = gen;
  }

  getGeneration(){
    console.log(this.generation)
    return this.generation
  }
}
