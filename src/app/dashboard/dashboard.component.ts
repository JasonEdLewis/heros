import { heroeservice } from './../hero.service';
import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[]

    getHeroes():void{
      this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1,5));
    }
å

  constructor(public heroService: heroeservice) { }

  ngOnInit(): void {
  }

}
