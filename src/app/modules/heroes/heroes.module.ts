import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@ui/ui.module';
import { HeroesRoutingModule } from '@heroes/routes/heroes-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { LayoutHeroeComponent } from '@heroes/views/layout-heroe.component';
import { ListHeroesComponent } from '@heroes/views/list-heroes/list-heroes.component';
import { SearchHeroesComponent } from '@heroes/views/search-heroes/search-heroes.component';
import { CreateHeroeComponent } from '@heroes/views/create-heroe/create-heroe.component';
import { HeroeIdComponent } from '@heroes/views/heroe-id/heroe-id.component';

@NgModule({
  declarations: [
    LayoutHeroeComponent,
    ListHeroesComponent,
    SearchHeroesComponent,
    CreateHeroeComponent,
    HeroeIdComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, UiModule, HttpClientModule],
})
export class HeroesModule {}
