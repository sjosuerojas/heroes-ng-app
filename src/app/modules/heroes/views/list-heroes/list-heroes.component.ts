import { Component, OnInit } from '@angular/core';
import { HeroService } from '@heroes/services/hero.service';
import type { Hero } from '@heroes/models/hero';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
})
export class ListHeroesComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
