import { Component, OnInit } from '@angular/core';
import { Card } from '../Models/card';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  card!: Card;
  imgSrc: string = '';
  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.getCard();
  }
  randomizeCard() {
    this.getCard();
  }
  getCard() {
    this.cardsService.getCard().subscribe((res) => {
      this.card = res;
      console.log(this.card);
      this.imgSrc = res.img_url;
    });
  }
}
