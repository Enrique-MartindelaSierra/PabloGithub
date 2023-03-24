import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, observable, Observable } from 'rxjs';
import { IEvento } from '../interfaces/i-evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private URL="eventos";
  constructor(private http:HttpClient) { }

  conseguirEventos():Observable<IEvento[]>{
    return this.http.get<{eventos:IEvento[]}>(this.URL)
    .pipe(map(response=>response.eventos));
  }

  addEvento(evento:IEvento):Observable<IEvento>{
    return this.http.post<{evento:IEvento}>(this.URL,evento).pipe(
      map(response=>{return response.evento;}));
  }

  borrarEvento(idEvento:number):Observable<number>{
    return this.http.delete<{evento:number}>(this.URL+"/"+idEvento).pipe(
      map(response=>response.evento)
    );
  }
  //EN VUESTRO SERVER
  /*borrarEvento(idEvento:number):Observable<string>{
    return this.http.delete<{mensaje:string}>(this.URL+"/"+idEvento).pipe(
      map(response=>response.mensaje)
    );
  }*/
}
