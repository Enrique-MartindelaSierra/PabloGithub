import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

 // constructor() { }

  getProductos():IProduct[]{
    return [
      {
        id: 1,
        desc: 'SSD hard drive',
        avail: new Date('2016-10-03'),
        price: 75,
        imageUrl: 'assets/ssd.jpg',
        rating: 5,
      },
      {
        id: 2,
        desc: 'LGA1151 Motherboard',
        avail: new Date('2016-09-15'),
        price: 96.95,
        imageUrl: 'assets/motherboard.jpg',
        rating: 4,
      },
      {
        id: 3,
        desc: 'LGA1152 Motherboard',
        avail: new Date('2016-09-17'),
        price: 96.95,
        imageUrl: 'assets/motherboard.jpg',
        rating: 3,
      },
      {
        id: 5,
        desc: 'LGA1153 Motherboard',
        avail: new Date('2016-09-12'),
        price: 96.95,
        imageUrl: 'assets/motherboard.jpg',
        rating: 2,
      },
    ];
  }

}
