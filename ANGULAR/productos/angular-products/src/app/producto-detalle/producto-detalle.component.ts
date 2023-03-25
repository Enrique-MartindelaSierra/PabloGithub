import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../interfaces/i-product';
import { ProductosService } from '../servicios/productos.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css'],
})
export class ProductoDetalleComponent implements OnInit{
  product!: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductosService,
    private routeDirecto: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // Recibimos parámetro
    this.productService.getProducto(id).subscribe({
      next:(p) => (this.product = p),
      error:(error) => console.error(error)
    }

    );
  }

  changeRating(estrella:number){
    //this.productoHijo.rating=estrella;
    this.productService.modificarEstrella(this.product.id,estrella).subscribe({
      next:respu=>{this.product.rating=estrella;console.log(respu)},
      error:e=>console.log(e)
    });
  }

  goBack(){
    this.routeDirecto.navigate(['/products']);
  }
}
