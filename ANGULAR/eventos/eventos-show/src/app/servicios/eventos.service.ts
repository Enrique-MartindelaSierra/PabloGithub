import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  //constructor() { }

  conseguirEventos():IEvento[]{
    return [
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
  }
}
