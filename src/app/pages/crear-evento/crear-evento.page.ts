import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventDataService } from 'src/app/services/event-data.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage {

  nuevoEvento: any = {
    nombre: '',
    fecha: '',
    aforo: 0,
    ubicacion: ''
  };

  constructor(
    private eventDataService: EventDataService,
    private router: Router
  ) {}

  crearEvento() {
    this.eventDataService.agregarEvento(this.nuevoEvento);
    this.router.navigate(['/eventos']);  // Volver a la lista de eventos
    console.log('Evento creado:', this.nuevoEvento);
  }
}
