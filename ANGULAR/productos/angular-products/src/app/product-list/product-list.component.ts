import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  titulo: string = 'LISTA DE PRODUCTOS';
  cabeceras = {
    descripcion: 'Producto',
    precio: 'Precio',
    avail: 'Disponible',
  };
  productos: IProduct[] = [
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
  ];
}
