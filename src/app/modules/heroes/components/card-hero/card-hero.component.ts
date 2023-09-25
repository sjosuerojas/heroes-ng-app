import { Component, Input } from '@angular/core';
import { Hero } from '@heroes/models/hero';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css'],
})
export class CardHeroComponent {
  @Input()
  public hero!: Hero;
}
