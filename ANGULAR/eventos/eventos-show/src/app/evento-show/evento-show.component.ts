import { Component } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'evento-show',
  templateUrl: './evento-show.component.html',
  styleUrls: ['./evento-show.component.css']
})
export class EventoShowComponent {
  alturaImagen=200;
  search="";

  newEvent:IEvento={
    title:"",
    description:"",
    image:"",
    price:0,
    date:new Date("")
  };

  eventos: IEvento[] = [
    {
      title: "Evento 1 Verano",
      image: 'assets/evento1.jpg',
      date: new Date('2016-10-03'),
      description: "Un evento espectacular",
      price: 100
    },
    {
      title: "Evento 2 Primavera",
      image: 'assets/evento2.jpg',
      date: new Date('2021-10-03'),
      description: "Un evento de música",
      price: 70
    },
    {
      title: "Evento 3 Verano",
      image: 'assets/acdc.jpg',
      date: new Date('2022-10-03'),
      description: "Sin descripción",
      price: 30
    }
  ];

  orderDate(){
    this.search="";
    this.eventos.sort((evento1,evento2)=>evento1.date.getTime()-evento2.date.getTime());
  }

  orderPrice(){
    this.search="";
    //this.eventos.sort((evento1,evento2)=>evento1.price<evento2.price?-1:1);
    this.eventos.sort((evento1,evento2)=>evento1.price-evento2.price);
  }

  addEvent(){
    console.log("Insertar Evento en el Array");
  }

  changeImage(fileInput: HTMLInputElement) {

    if (!fileInput.files || fileInput.files.length === 0) {
     return;
    }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', (e) => {
      /*if(reader.result!=null)
        this.newEvent.image = reader.result.toString();
      else
      this.newEvent.image = "";*/
      this.newEvent.image = reader.result as string;
    });

   }

}
