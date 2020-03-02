import { HEROES } from './../mock-heroes';
import { heroeservice } from './../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscriber } from 'rxjs';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
@Input() hero : Hero;



constructor(
  private route: ActivatedRoute,
  private heroService: heroeservice,
  private Location: Location
) { }

  ngOnInit(): void {
    this.getHero()
  }
  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }
  goBack():void{
    this.Location.back()
  }

}
