import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerationsPage } from './generations.page';

const routes: Routes = [
  {
    path: '',
    component: GenerationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerationsPageRoutingModule {}
