import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutHeroeComponent } from '@heroes/components/layout-heroe.component';
import { CreateHeroeComponent } from '@heroes/components/create-heroe/create-heroe.component';
import { HeroeIdComponent } from '@heroes/components/heroe-id/heroe-id.component';
import { ListHeroesComponent } from '@heroes/components/list-heroes/list-heroes.component';
import { SearchHeroesComponent } from '@heroes/components/search-heroes/search-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutHeroeComponent,
    children: [
      {
        path: 'new-heroe',
        component: CreateHeroeComponent,
      },
      {
        path: 'search',
        component: SearchHeroesComponent,
      },
      {
        path: 'edit/:id',
        component: CreateHeroeComponent,
      },
      {
        path: 'list',
        component: ListHeroesComponent,
      },
      {
        path: ':id',
        component: HeroeIdComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
