import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeNewsService {

  constructor(private http: HttpClient) {
     
   }

  getPokemones(palabra = "Pokemon", API_KEY="cfb3ebdf70d64840959ff3b58c69e6f0"){
    return  this.http.get<any>(`https://newsapi.org/v2/everything?q=${palabra}&from=2021-05-16&sortBy=popularity&apiKey=${API_KEY}`)
  }
}
