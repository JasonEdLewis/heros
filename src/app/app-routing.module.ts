import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path:'messages', component: MessagesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'', redirectTo:'dashboard', pathMatch:'full'}
]

@NgModule({

  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
