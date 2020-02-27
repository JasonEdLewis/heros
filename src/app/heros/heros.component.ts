import { HEROES } from './../mock-heros';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes = HEROES;
  detailedHero:boolean;
  selectedHero: Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.detailedHero = true
  }
  onChangeName($event){
    this.selectedHero = $event;
    this.detailedHero = false

  }

  constructor() { }

  ngOnInit(): void {
  }

}

