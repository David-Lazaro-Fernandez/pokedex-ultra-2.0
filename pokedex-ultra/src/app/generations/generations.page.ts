import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GenerationsService } from './generations.service'
@Component({
  selector: 'app-generations',
  templateUrl: './generations.page.html',
  styleUrls: ['./generations.page.scss'],
})
export class GenerationsPage implements OnInit {

  constructor(
    private router: Router,
    private service: GenerationsService,
  ) { }
  gen: number= 0;
  ngOnInit() {
  }


  ruta(){
    console.log("Test")
    this.router.navigate(['/home'])
  }

  goToPokedex(generation){
    this.router.navigate(['/pokedex'])
    this.service.setGeneration(generation)
    console.log(this.service.getGeneration())
  }

}
