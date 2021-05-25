import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss'],
})
export class PokemonDataComponent implements OnInit{
  colores = coloresPorTipo
  ngOnInit(){
    console.log(this.tipo)
    console.log(typeof this.tipo)
  }

  @Input() tipo = coloresPorTipo.Bug

  constructor() { }
  
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

