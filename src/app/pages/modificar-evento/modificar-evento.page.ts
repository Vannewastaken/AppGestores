import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventDataService } from 'src/app/services/event-data.service';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.page.html',
  styleUrls: ['./modificar-evento.page.scss'],
})
export class ModificarEventoPage implements OnInit {
  event: any = {
    id: '',
    nombre: '',
    fecha: '',
    aforo: 0,
    ubicacion: ''
  };

  constructor(
    private route: ActivatedRoute,
    private eventDataService: EventDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const eventId = params['id'];
      if (eventId) {
        this.event = this.eventDataService.getEventById(eventId);
      }
    });
  }

  guardarCambios() {
    this.eventDataService.modificarEvento(this.event);
    this.router.navigate(['/eventos']);  // Volver a la lista de eventos
    console.log('Evento modificado:', this.event);
  }
}
