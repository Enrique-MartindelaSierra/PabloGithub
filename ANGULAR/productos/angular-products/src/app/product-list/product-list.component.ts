import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/i-product';
import { ProductosService } from '../servicios/productos.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  titulo = 'LISTA DE PRODUCTOS';

  constructor(private servicio:ProductosService){}

  ngOnInit(){
    //this.productos=this.servicio.getProductos();
    this.servicio.getProductos().subscribe(
      productosVienenServidor=>this.productos=productosVienenServidor
    );
    /*this.servicio.getProductos().subscribe({
      next:productosVienenServidor=>this.productos=productosVienenServidor,
      error:errores=>console.log(errores),
      complete:()=>console.log("Productos Traidos")
    });*/
  }


  quieroEstilo1=true;
  quieroEstilo2=false;
  showImage=true;
  filterSearch = "";

  cabeceras = {
    descripcion: 'Producto',
    precio: 'Precio',
    avail: 'Disponible',
    image: 'Imagen',
    rating: 'Puntuación'
  };
  productos: IProduct[] = [];

  toggleImage(){
    this.showImage=!this.showImage;
  }
  cambiarEstilo(){
    const radio=document.getElementsByTagName("input")[0];

    if(radio.checked){
      this.quieroEstilo1=true;
      this.quieroEstilo2=false;
    }
    else{
      this.quieroEstilo1=false;
      this.quieroEstilo2=true;
    }
    //Con CHANGE:
    //this.quieroEstilo1=!this.quieroEstilo1;
    //this.quieroEstilo2=!this.quieroEstilo2;
  }
}
