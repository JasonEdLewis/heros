import { MessageService } from './../message.service';
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
  /* the [Hero] on line 13 & 27 is not neccesary but is proper type script. It is a class just like strings, number,
   booleans, etc so can & should be bound to the variable as a type that it is being initialized as. line 14 is essentually initializing [selectedHero] to set in the function starting on line 25
   eg:
   selectedHero;
      ......
   onSelect(hero){
     this.selectedHero = hero
   }
   */

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.MessageService.add(`Hero Selected: ${this.selectedHero.name} `)


  }
  // line 32: same function name from service file
  getHeroes():void{
// this function is equivalent to this.heros = HeroService.getHeroes()
  this.HeroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes)
  }

/*  **Important step on line 44: [HeroService] must be set here for use in this component].
 key can be anything but value MUST BE imported service class name (
   e.g constructor(private Jason:HeroService) {} would work just fine. All other instance would need to be appended with [Jason].
   e.g. this.heros = this.Jason.getHeros() for line 34
 )
*/
  constructor(private HeroService: HeroService, public MessageService : MessageService) { }

  ngOnInit(): void {
    //line 41: same function from service file and initialized on line 32
    this.getHeroes();
  }

}

