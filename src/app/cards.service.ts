import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  getCard(): Observable<any> {
    return this.http.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
  }
}
