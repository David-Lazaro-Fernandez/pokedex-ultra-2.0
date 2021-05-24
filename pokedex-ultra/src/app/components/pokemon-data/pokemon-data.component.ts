import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.scss'],
})
export class PokemonDataComponent{
  @Input() tipo = coloresPorTipo.Grass
  constructor() { }
  backgroundColor = {
    [coloresPorTipo.Bug] : "#C0DE8E",
    [coloresPorTipo.Dark] : "#373737",
    [coloresPorTipo.Dragon] : "#692BCF",
    [coloresPorTipo.Electric] : "#D8B500",
    [coloresPorTipo.Fairy] : "#D37ECB",
    [coloresPorTipo.Fighting] : "#F05030",
    [coloresPorTipo.Fire] : "#F08A42",
    [coloresPorTipo.Flying] : "#AED1D9",
    [coloresPorTipo.Ghost] : "#807CB1",
    [coloresPorTipo.Grass] : "#46D27E",
    [coloresPorTipo.Ground] : "#C88555",
    [coloresPorTipo.Ice] : "#89E3FF",
    [coloresPorTipo.Normal] : "#A8A090",
    [coloresPorTipo.Poison] : "#BF46D2",
    [coloresPorTipo.Psychic] : "#FC62FF",
    [coloresPorTipo.Rock] : "#97755D",
    [coloresPorTipo.Steel] : "#ACACAC",
    [coloresPorTipo.Water] : "#006ACC",
  } 
}

export enum coloresPorTipo{
  Grass,
  Water,
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fighting,
  Fire,
  Flying,
  Ghost,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
}
