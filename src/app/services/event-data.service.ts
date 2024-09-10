import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {



  private selectedItem: any;
  private items: any[] = [
    { id: '1', nombre: 'Evento 1', fecha: '2024-09-01', aforo: 7500 },
    { id: '2', nombre: 'Evento 2', fecha: '2024-09-02', aforo: 3000 },
    { id: '3', nombre: 'Evento 3', fecha: '2024-09-01', aforo: 8500 },
    { id: '4', nombre: 'Evento 4', fecha: '2024-09-01', aforo: 4500 },
    { id: '5', nombre: 'Evento 5', fecha: '2024-09-01', aforo: 6500 },
    { id: '6', nombre: 'Evento 6', fecha: '2024-09-01', aforo: 5500 },
    { id: '7', nombre: 'Evento 7', fecha: '2024-09-01', aforo: 1500 },
    { id: '8', nombre: 'Evento 8', fecha: '2024-09-01', aforo: 2500 },
    { id: '9', nombre: 'Evento 9', fecha: '2024-09-01', aforo: 500 },
    { id: '10', nombre: 'Evento 10', fecha: '2024-09-01', aforo: 76500 },
    { id: '11', nombre: 'Evento 11', fecha: '2024-09-01', aforo: 47500 },
    { id: '12', nombre: 'Evento 12', fecha: '2024-09-01', aforo: 37500 },
    { id: '13', nombre: 'Evento 13', fecha: '2024-09-01', aforo: 27500 },
    { id: '14', nombre: 'Evento 14', fecha: '2024-09-01', aforo: 17500 },
    { id: '15', nombre: 'Evento 15', fecha: '2024-09-01', aforo: 57500 },
    { id: '16', nombre: 'Evento 16', fecha: '2024-09-01', aforo: 67500 },
    { id: '17', nombre: 'Evento 17', fecha: '2024-09-01', aforo: 87500 },
    { id: '18', nombre: 'Evento 18', fecha: '2024-09-01', aforo: 97500 },
    { id: '19', nombre: 'Evento 19', fecha: '2024-09-01', aforo: 1400 },
    { id: '20', nombre: 'Evento 20', fecha: '2024-09-01', aforo: 16500 },
 
    

    // Otros eventos
  ];

  private isRegistered: boolean = false;

  constructor() { }

  // Set y Get del evento seleccionado
  setSelectedItem(item: any) {
    this.selectedItem = item;
  }

  getSelectedItem() {
    return this.selectedItem;
  }
  modificarEvento(eventoModificado: any) {
    const index = this.items.findIndex(event => event.id === eventoModificado.id);
    if (index !== -1) {
      this.items[index] = eventoModificado;  // Reemplaza el evento existente con el modificado
      console.log('Evento modificado:', eventoModificado);
    } else {
      console.log('Evento no encontrado.');
    }
  }
  agregarEvento(evento: any) {
    evento.id = Date.now().toString();  // Genera un ID único basado en la fecha actual
    this.items.push(evento);  // Añade el nuevo evento a la lista
    console.log('Evento agregado:', evento);
  }
  
  

  // Eliminar evento
  eliminarEvento(item: any) {
    const index = this.items.findIndex(event => event === item);
    if (index > -1) {
      this.items.splice(index, 1);  // Elimina el evento de la lista
      console.log('Evento eliminado:', item);
    }
  }



  // Obtener lista de eventos
  getItems() {
    return this.items;
  }

  // Registro de usuario
  isUserRegistered() {
    return this.isRegistered;
  }

  registerUser() {
    this.isRegistered = true;
  }

  unregisterUser() {
    this.isRegistered = false;
  }

  getUserData() {
    return {
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com'
    };
  }
  getEventById(eventId: string): any {
    // Busca el evento con el ID dado
    return this.items.find(event => event.id === eventId);
  }
  
}

