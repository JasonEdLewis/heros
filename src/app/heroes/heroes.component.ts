import { MessageService } from './../message.service';
import { heroeservice } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroeservice: heroeservice) { }

  heroes: Hero[];
   // line 32: same function name from service file
   getHeroes():void{
    // this function is equivalent to this.heroes = heroeservice.getHeroes()
      this.heroeservice.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
      }
      ngOnInit(): void {
        //line 41: same function from service file and initialized on line 32
        this.getHeroes();
      }


  }


/*  **Important step on line 44: [heroeservice] must be set here for use in this component].
 key can be anything but value MUST BE imported service class name (
   e.g constructor(private Jason:heroeservice) {} would work just fine. All other instance would need to be appended with [Jason].
   e.g. this.heroes = this.Jason.getheroes() for line 34
 )
*/






