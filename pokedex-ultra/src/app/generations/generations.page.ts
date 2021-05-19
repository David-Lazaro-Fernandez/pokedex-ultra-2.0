import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-generations',
  templateUrl: './generations.page.html',
  styleUrls: ['./generations.page.scss'],
})
export class GenerationsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  ruta(){
    console.log("Test")
    this.router.navigate(['/home'])
  }

}
