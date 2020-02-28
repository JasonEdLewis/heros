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
// this function is equivalent to this.heroes = heroeservice.getHeroes()
  this.heroeservice.getHeroes()
  .subscribe(heroes => this.heroes = heroes)
  }

/*  **Important step on line 44: [heroeservice] must be set here for use in this component].
 key can be anything but value MUST BE imported service class name (
   e.g constructor(private Jason:heroeservice) {} would work just fine. All other instance would need to be appended with [Jason].
   e.g. this.heroes = this.Jason.getheroes() for line 34
 )
*/
  constructor(private heroeservice: heroeservice, public MessageService : MessageService) { }

  ngOnInit(): void {
    //line 41: same function from service file and initialized on line 32
    this.getHeroes();
  }

}

