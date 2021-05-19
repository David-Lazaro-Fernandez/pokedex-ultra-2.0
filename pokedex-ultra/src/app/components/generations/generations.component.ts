import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss'],
})
export class GenerationsComponent implements OnInit {

  constructor(private router: Router) { }
  generation = [];

  ngOnInit() {
    console.log("ComponentDidLoad")
  }

  updateNumber(gen){
    this.generation[1] = gen;
  }


}
