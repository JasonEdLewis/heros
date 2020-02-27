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

 hero: Hero ={
    id:1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

