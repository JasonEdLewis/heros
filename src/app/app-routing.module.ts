import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'heroes', component: HeroesComponent},
  {path:'messages', component: MessagesComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'detail/:id', component: HeroDetailComponent}
]

@NgModule({

  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
