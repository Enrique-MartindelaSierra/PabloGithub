import { Component } from '@angular/core';
import { IProduct } from '../interfaces/i-product';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  alturaImagen=40;
  colorTs="red";
  product:IProduct={
    id: 2,
    desc: 'LGA1151 Motherboard',
    avail: new Date('2016-09-15'),
    price: 96.95,
    imageUrl: 'assets/motherboard.jpg',
    rating: 4,
  };
  showImage=true;
  quieroEstilo1=false;
  quieroEstilo2=true;
}
