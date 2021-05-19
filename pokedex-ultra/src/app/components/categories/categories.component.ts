import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {

  @Input() colores = Colores.amarillo
  @Input() colorSecundario = Colores.amarillo

  secondaryCardColor = {
    [Colores.rojo] : "#f98b7e",
    [Colores.azul] : "#71bffc",
    [Colores.amarillo] : "#ffda5b",
    [Colores.verde] : "#57d0b1",
    [Colores.naranja] : "#f5a771",
    [Colores.morado] : "#9569a5"
  }
  cardColors = {
    [Colores.rojo] : "#f7786b",
    [Colores.azul] : "#58aaf6",
    [Colores.amarillo] : "#ffce4b",
    [Colores.verde] : "#4fc1a6",
    [Colores.naranja] : "#F08A42",
    [Colores.morado] : "#7c538c"
  }
  cardShadow = {
    [Colores.rojo] : "RGBA(247, 120, 107,0.5)",
    [Colores.azul] : "RGBA(88, 170, 246,0.5)",
    [Colores.amarillo] : "RGBA(255, 206, 75,0.5)",
    [Colores.verde] : "RGBA(79, 193, 166,0.5)",
    [Colores.naranja] : "RGBA(240, 138, 66,0.5)",
    [Colores.morado] : "RGBA(124, 83, 140,0.5)"
  }

}

export enum Colores{
  rojo,
  amarillo,
  verde,
  azul,
  naranja,
  morado
}