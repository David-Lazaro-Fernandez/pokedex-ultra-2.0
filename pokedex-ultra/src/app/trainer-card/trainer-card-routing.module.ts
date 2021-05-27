import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerCardPage } from './trainer-card.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerCardPageRoutingModule {}
