import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes: Hero[];
  //line 13: the [heroes] here needs to match the

  selectedHero:Hero;
  /* the [Hero] on line 14 & 17 is not neccesary but is proper type script. It is a class just like strings, number,
   booleans, etc so can & should be bound. line 14 is essentually initializing [selectedHero] to set in the function starting on line 25
   eg:
   selectedHero;
      ......
   onSelect(hero){
     this.selectedHero = hero
   }
   */

  onSelect(hero:Hero):void{
    this.selectedHero = hero;

  }
  // line 32: same function name from service file
  getHeroes():void{
  // set the return value from the service file method - appended with the class name - to the initialized variable above
    this.heroes = this.HeroService.getHeroes()
  }

/*  **Important step on line 38: [HeroService must be set here for use in this component].
 key can be anything but value MUST BE imported service class name (
   e.g constructor(private Jason:HeroService) {} would work just fine. All other instance would need to be appended with [Jason].
   e.g. this.heros = this.Jason.getHeros() for line 34
 )
*/
  constructor(private HeroService: HeroService) { }

  ngOnInit(): void {
    //line 41: same function from service file and initialized on line 32
    this.getHeroes();
  }

}

