import { Component } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'evento-show',
  templateUrl: './evento-show.component.html',
  styleUrls: ['./evento-show.component.css']
})
export class EventoShowComponent {
  alturaImagen=200;

  eventos: IEvento[] = [
    {
      title: "Evento 1",
      image: 'assets/evento1.jpg',
      date: '2016-10-03',
      description: "Descripción del Evento 1",
      price: 100
    },
    {
      title: "Evento 2",
      image: 'assets/evento2.jpg',
      date: '2021-10-03',
      description: "Descripción del Evento 2",
      price: 70
    },
    {
      title: "Evento 3",
      image: 'assets/acdc.jpg',
      date: '2022-10-03',
      description: "Descripción del Evento 3",
      price: 30
    }
  ];


}
