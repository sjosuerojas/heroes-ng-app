import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './routes/heroes-routing.module';
import { LayoutHeroeComponent } from './components/layout-heroe.component';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { SearchHeroesComponent } from './components/search-heroes/search-heroes.component';
import { CreateHeroeComponent } from './components/create-heroe/create-heroe.component';
import { HeroeIdComponent } from './components/heroe-id/heroe-id.component';

@NgModule({
  declarations: [
    LayoutHeroeComponent,
    ListHeroesComponent,
    SearchHeroesComponent,
    CreateHeroeComponent,
    HeroeIdComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
