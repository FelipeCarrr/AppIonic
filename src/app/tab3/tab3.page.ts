import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  hoteles = [
    {
      nombre: 'Hotel A',
      descripcion: 'Descripción del Hotel A.',
      imagenes: [
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/hotel_1.jpg?alt=media&token=05f4a24a-e6f2-49bb-867d-5e7bbb7b7a7f',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/hotel_2.jpeg?alt=media&token=57ce0baf-c176-4089-b5f5-9066f40b4291',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/hotel_b.avif?alt=media&token=77360805-7466-4cac-9916-667190114901'
      ],
      abierto: false // Propiedad para controlar el estado abierto/cerrado
    },
    {
      nombre: 'Hotel B',
      descripcion: 'Descripción del Hotel B.',
      imagenes: [
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/hotel_1.jpg?alt=media&token=05f4a24a-e6f2-49bb-867d-5e7bbb7b7a7f',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/hotel_2.jpeg?alt=media&token=57ce0baf-c176-4089-b5f5-9066f40b4291',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/hotel_b.avif?alt=media&token=77360805-7466-4cac-9916-667190114901'
      ],
      abierto: false // Propiedad para controlar el estado abierto/cerrado
    },
    // Agrega más hoteles con sus datos e imágenes aquí
  ];

  toggleList(hotel: any) {
    hotel.abierto = !hotel.abierto;
  }

}
