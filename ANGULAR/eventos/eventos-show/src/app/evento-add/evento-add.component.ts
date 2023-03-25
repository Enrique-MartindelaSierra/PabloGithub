import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEvento } from '../interfaces/i-evento';
import { EventosService } from '../servicios/eventos.service';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  ngOnInit(): void {
    this.inicializarEvento();
  }

  newEvent!:IEvento;

  inicializarEvento(){
    this.newEvent={
      title:"",
      description:"",
      image:"",
      price:0,
      date:new Date("")
    };
  }

  constructor(private eventosService:EventosService){}

  @Output() eventoNuevo=new EventEmitter<IEvento>();

  addEvent(){
    this.eventosService.addEvento(this.newEvent).subscribe(
      pepe=>{
        this.eventoNuevo.emit(pepe);
        this.inicializarEvento();
      }
    )
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
