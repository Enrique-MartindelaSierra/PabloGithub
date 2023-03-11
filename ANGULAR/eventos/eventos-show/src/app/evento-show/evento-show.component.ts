import { Component } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';

@Component({
  selector: 'evento-show',
  templateUrl: './evento-show.component.html',
  styleUrls: ['./evento-show.component.css']
})
export class EventoShowComponent {


  eventos: IEvento[] = [];




}
