import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Card } from '../Models/card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  getCard(): Observable<Card> {
    return this.http
      .get<any>('https://db.ygoprodeck.com/api/v7/randomcard.php')
      .pipe(
        map((response) => ({
          id: response.id,
          name: response.name,
          type: response.type,
          desc: response.desc,
          atk: response.atk,
          def: response.def,
          level: response.level,
          race: response.race,
          attribute: response.attribute,
          img_url: response.card_images[0].image_url,
        }))
      );
  }
}
