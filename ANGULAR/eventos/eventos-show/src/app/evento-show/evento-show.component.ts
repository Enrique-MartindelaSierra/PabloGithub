import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'evento-show',
  templateUrl: './evento-show.component.html',
  styleUrls: ['./evento-show.component.css']
})
export class EventoShowComponent implements OnInit, OnChanges, DoCheck, OnDestroy{

  ngOnInit(){
    console.log("ngOnInit");
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }


  alturaImagen=200;
  search="";
  desplegable="";
  fondoRojo=false;
  fondoAzul=false;

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
    this.eventos.sort((evento1,evento2)=>evento1.date.getMilliseconds()-evento2.date.getMilliseconds());
  }

  orderPrice(){
    this.search="";
    //this.eventos.sort((evento1,evento2)=>evento1.price<evento2.price?-1:1);
    this.eventos.sort((evento1,evento2)=>evento1.price-evento2.price);
  }

  addEvent(){
    console.log("Insertar Evento en el Array");
    this.eventos.push(this.newEvent);
    this.newEvent={
      title:"",
      description:"",
      image:"",
      price:0,
      date:new Date("")
    };
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

   cambiarFondo(){
    if(this.desplegable!="")
      if(this.desplegable=="rojo"){
        this.fondoRojo=true;
        this.fondoAzul=false;
      }
      else{
        this.fondoRojo=false;
        this.fondoAzul=true;
      }
   else{
    this.fondoRojo=false;
    this.fondoAzul=false;
   }
  }
}
