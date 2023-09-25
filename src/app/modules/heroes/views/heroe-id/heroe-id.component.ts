import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { Hero } from '@heroes/models/hero';
import { HeroService } from '@heroes/services/hero.service';

@Component({
  selector: 'app-heroe-id',
  templateUrl: './heroe-id.component.html',
})
export class HeroeIdComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/heroes/list');
        return (this.hero = hero);
      });
  }
}
