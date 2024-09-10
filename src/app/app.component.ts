import { Component } from '@angular/core';

interface Menu{
  icon:string;
  name:string;
  redirecTo:string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu: Menu[]=[
    {
      icon: 'calendar-outline',
      name: 'Eventos',
      redirecTo: '/eventos'  
    },
    {
      icon: 'create-outline',
      name: 'Gestionar Eventos',
      redirecTo: '/gestionar-eventos'  
    },
    {
      icon: 'chatbox-outline',
      name: 'Mensajes',
      redirecTo: '/mensajes'  
    },
    {
      icon:'close-circle-outline',
      name:'Cerrar sesión',
      redirecTo:'/login'
    }   

    




  ]
  constructor() {}
}