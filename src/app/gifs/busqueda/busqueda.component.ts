import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>; // '!': not null assertion operator - asegura de que el objeto no es nulo

  constructor( private gifsService:GifsService){}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value

    if( valor.trim().length === 0 ) {
      return;
    } // para eviatr que introduzcan vacío

    this.gifsService.buscarGif( valor );

    this.txtBuscar.nativeElement.value = '';
  }
}
