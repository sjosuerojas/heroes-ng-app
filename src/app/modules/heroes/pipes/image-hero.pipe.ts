import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '@heroes/models/hero';

@Pipe({
  name: 'imageHero',
})
export class ImageHeroPipe implements PipeTransform {
  transform(hero: Hero): string {
    if (!hero.id) return 'assets/heroes/no-image.png';
    return `assets/heroes/${hero.id}.jpg`;
  }
}
