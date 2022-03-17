import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  card: any;
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
      this.imgSrc = res.card_images[0].image_url;
    });
  }
}
