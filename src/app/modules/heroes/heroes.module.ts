import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@ui/ui.module';
import { HeroesRoutingModule } from '@heroes/routes/heroes-routing.module';

import { ImageHeroPipe } from '@heroes/pipes/image-hero.pipe';
import { CardHeroComponent } from '@heroes/components/card-hero/card-hero.component';
import { LayoutHeroeComponent } from '@heroes/views/layout-heroe.component';
import { ListHeroesComponent } from '@heroes/views/list-heroes/list-heroes.component';
import { SearchHeroesComponent } from '@heroes/views/search-heroes/search-heroes.component';
import { CreateHeroeComponent } from '@heroes/views/create-heroe/create-heroe.component';
import { HeroeIdComponent } from '@heroes/views/heroe-id/heroe-id.component';

@NgModule({
  declarations: [
    ImageHeroPipe,
    LayoutHeroeComponent,
    ListHeroesComponent,
    SearchHeroesComponent,
    CreateHeroeComponent,
    HeroeIdComponent,
    CardHeroComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, UiModule],
})
export class HeroesModule {}
