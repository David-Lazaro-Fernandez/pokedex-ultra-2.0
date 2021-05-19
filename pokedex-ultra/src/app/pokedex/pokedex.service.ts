import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }
  getPokemones(id){
    return  this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
}
