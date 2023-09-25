import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-heroe',
  templateUrl: './layout-heroe.component.html',
  styles: [],
})
export class LayoutHeroeComponent {
  sidenavItems = [
    { label: 'Add', icon: 'add', isActive: false, url: '/heroes/new-heroe' },
    { label: 'List', icon: 'list', isActive: true, url: '/heroes/list' },
    { label: 'Search', icon: 'search', isActive: false, url: '/heroes/search' },
  ];
}
