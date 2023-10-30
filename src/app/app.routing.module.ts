import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DrinksComponent } from './drinks/drinks.component';
import { DetailDrinkComponent } from './detail-drink/detail-drink.component';

const routes: Routes = [
  { path: 'drinks', component: DrinksComponent},
  { path: 'detail/drink/:id', component: DetailDrinkComponent},
  { path: '',   redirectTo: '/drinks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }