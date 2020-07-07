import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css'],
})
export class CardContainerComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  /**
   * Essa função encapsula o método do products service e retorna os produtos
   * em um array, atribuindo a this.products.
   */
  getProducts() {
    this.productsService
      .products()
      .subscribe((response) => (this.products = response.products));
  }
}
