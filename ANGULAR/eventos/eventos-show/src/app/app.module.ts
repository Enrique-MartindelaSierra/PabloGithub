import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventoShowComponent } from './evento-show/evento-show.component';
import { EventoFiltroPipe } from './pipes/evento-filtro.pipe';
import { EventoItemComponent } from './evento-item/evento-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoShowComponent,
    EventoFiltroPipe,
    EventoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
