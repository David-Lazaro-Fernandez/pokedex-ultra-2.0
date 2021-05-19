import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { GenerationsPage } from '../generations/generations.page'
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'generations',
    component: GenerationsPage,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
