import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() product: Product;

  colorStyle: string;

  constructor() {}

  ngOnInit() {
    this.colorStyle = `color: ${this.product.color}`;
  }
}
