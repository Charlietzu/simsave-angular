import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.model';

/**
 * Aqui é onde são feitas as função relacionadas a requisições feitas para os produtos
 * da API.
 */

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ProductsService {
  constructor(private http: Http) {}

  products(): Observable<any> {
    return this.http
      .get('https://teste-simsave.getsandbox.com/home')
      .pipe(map((response) => response.json()));
  }
}
