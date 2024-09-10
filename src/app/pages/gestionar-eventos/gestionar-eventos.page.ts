import { Component, OnInit } from '@angular/core';
import { EventDataService } from 'src/app/services/event-data.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionar-eventos',
  templateUrl: './gestionar-eventos.page.html',
  styleUrls: ['./gestionar-eventos.page.scss'],
})
export class GestionarEventosPage implements OnInit {

  selectedItem: any = null;
  isEventSelected: boolean = false;

  constructor(
    private eventDataService: EventDataService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadSelectedItem();
  }

  ionViewWillEnter() {
    this.loadSelectedItem();
  }

  loadSelectedItem() {
    this.selectedItem = this.eventDataService.getSelectedItem();
    this.isEventSelected = this.selectedItem !== null;
  }


    modificarEvento() {
      // Redirigir a la página de modificar evento
      this.router.navigate(['/modificar-evento']);
    }
  

  async eliminarEvento() {
    const alert = await this.alertController.create({
      header: 'Eliminar Evento',
      message: '¿Estás seguro de que deseas eliminar este evento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eventDataService.eliminarEvento(this.selectedItem);
            this.router.navigate(['/eventos']);  // Volver a la lista de eventos
            console.log('Evento eliminado');
          }
        }
      ]
    });

    await alert.present();
  }

  crearEvento() {
    // Redirigir a la página de crear evento
    this.router.navigate(['/crear-evento']);
  }
}
