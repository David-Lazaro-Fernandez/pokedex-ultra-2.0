import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.page.html',
  styleUrls: ['./trainer-card.page.scss'],
})
export class TrainerCardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ruta(){
    console.log("Test")
    this.router.navigate(['/home'])
  }
}
