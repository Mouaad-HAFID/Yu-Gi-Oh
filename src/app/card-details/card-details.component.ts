import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../Models/card';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  @Input()
  card!: Card;
  @Output() randomize: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  randomizeCard() {
    this.randomize.emit();
  }
}
