import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  restaurantes = [
    {
      nombre: 'Asadero Donde Edgar',
      direccion: 'Avenida los Estoraques',
      celular: '3108808327',
      propietario: 'Armando Alfonso Torrado',
      servicios: 'Comida corriente y a la carta, servicio a domicilio, atención de eventos, Tv cable.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Restaurantes%2Frest21.jpeg?alt=media&token=d0c039d2-8885-43e2-80f5-db5c39460b0b'
    },
    {
      nombre: 'El Establo',
      direccion: 'Salida a la vereda Curasica',
      celular: '3214644265 - 3176555938',
      propietario: ' Mauricio Pacheco Tarazona',
      servicios: 'Comida corriente y a la carta, servicio a domicilio, atención de eventos, show de música en vivo (fechas especiales), WiFi.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Restaurantes%2Frest20.jpeg?alt=media&token=1f8c8b6b-0fd7-4e04-a06e-20c6e08bd775'
    },
    {
      nombre: 'Los Arrayanes',
      direccion: 'Carrera 3 Nº 1-57',
      celular: '3112307935',
      propietario: 'Farid Mauricio Ortiz Rueda',
      servicios: 'Comida corriente y a la carta, servicio a domicilio, Tv cable.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Restaurantes%2Frest19.jpeg?alt=media&token=7b5f8673-4332-43cc-809d-dcf07fc0d6c5'
    },
    
  ];

}
