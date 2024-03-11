// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BoxesComponent } from './boxes/boxes.component';
import { BoxDetailsComponent } from './box-details/box-details.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'boxes', component: BoxesComponent },
  { path: 'box-details/:id', component: BoxDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
