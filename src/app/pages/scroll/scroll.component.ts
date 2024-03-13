import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
}

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent {
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        console.log(data)
        this.products = data;
      });
  }
}
