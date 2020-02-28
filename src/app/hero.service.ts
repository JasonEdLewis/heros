import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    this.MessageService.add('Hero Service: fetched heroes')
    return of (HEROES)
  }
  /*
  lines 11 - 13 are the async, but exact, version of the method on lines 16 - 18
  getHeroes(): Hero[] {
    return HEROES
  }
   */

  constructor(private MessageService: MessageService) { }
}
