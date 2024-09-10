import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventDataService } from 'src/app/services/event-data.service';

@Component({
  selector: 'app-eventos',
  templateUrl: 'eventos.page.html',
  styleUrls: ['eventos.page.scss']
})
export class EventosPage implements OnInit {

  items: any[] = [];

  constructor(private router: Router, private eventDataService: EventDataService) {}

  ngOnInit() {
    this.loadEvents();  // Cargar eventos al iniciar la página
  }

  ionViewWillEnter() {
    this.loadEvents();  // Cargar eventos cada vez que se entra a la vista
  }

  loadEvents() {
    this.items = this.eventDataService.getItems();  // Obtener eventos desde el servicio
  }

  abrirDetalle(item: any) {
    this.eventDataService.setSelectedItem(item);  // Seleccionar evento actual
    this.router.navigate(['/gestionar-eventos']); 
  }

  loadData($event: any) {
    console.log('Cargando siguientes eventos...');

    setTimeout(() => {
      if (this.items.length > 50) {
        $event.target.complete();
        return;
      }

      // Simula la carga de más eventos si fuera necesario
      const nuevoArr = Array(20).fill({
        nombre: 'Nuevo Evento',
        descripcion: 'Descripción del nuevo evento',
        fecha: '2024-09-03',
        hora: '12:00 PM',
        ubicacion: 'Nueva Ubicación'
      });

      this.items.push(...nuevoArr);
      $event.target.complete();
    }, 1000);
  }
}
