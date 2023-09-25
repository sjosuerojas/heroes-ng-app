import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import type { Hero } from '@heroes/models/hero';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
}
