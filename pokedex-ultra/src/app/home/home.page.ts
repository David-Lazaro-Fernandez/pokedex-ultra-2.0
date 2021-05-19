import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { Colores } from '../components/categories/categories.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router ) {}
  colores = Colores  
  ruta(){
    console.log("Test")
    this.router.navigate(['/generations'])
  }
}
