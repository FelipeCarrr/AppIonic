import { Component, Input } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @Input() hotel: any;
  @Input() mostrarRuta: boolean = false;
  hoteles = [
    {
      nombre: 'Hospedaje Villa Ligia',
      descripcion: 'Dirección: La Playa, Norte de Santander<br>Teléfono: 3153030878',    
      imagenes: [
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Hospedaje%20Villa%20Ligia%2FIMG_20211115_143043.jpg?alt=media&token=5f2930f7-b264-4724-aac6-c21074e69add',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Hospedaje%20Villa%20Ligia%2FIMG_20211115_142731.jpg?alt=media&token=55c14caa-1ee2-4d78-b364-fa99ba1e82dd',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Hospedaje%20Villa%20Ligia%2FIMG_20211115_142737.jpg?alt=media&token=1ec5b803-7b76-4ab0-9b38-8297b32fce25'
      ],
      ubicacion: { latitud: 8.210742, longitud: -73.240378 },
      abierto: false 
    },
    {
      nombre: 'Orquideas Plaza Hotel',
      descripcion: 'Dirección: La Playa, Norte de Santander<br>Teléfono: 3138300442',
      imagenes: [
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Orquideas%20Plaza%20Hotel%2F2022-12-27.jpg?alt=media&token=274d5553-a8a7-4b7c-96a5-6ed93cca4b06',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Orquideas%20Plaza%20Hotel%2F2022-12-25.jpg?alt=media&token=fb420694-45a3-490b-ae56-6220a7e24fbc',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Orquideas%20Plaza%20Hotel%2F2022-12-29.jpg?alt=media&token=7558b683-d368-4a86-aa37-906c6268f6f9'
      ],
      ubicacion: { latitud: 8.210755, longitud: -73.239618 },
      abierto: false 
    },
    {
      nombre: 'Hostal Posada Marmacrisli',
      descripcion: 'Dirección: La Playa, Norte de Santander<br>Teléfono: 3106793300',
      imagenes: [
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Posada%20Marmacrisli%2Fposada-1.jpeg?alt=media&token=b12427b5-d764-47d2-a3aa-4b995dd2e072',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Posada%20Marmacrisli%2Fposada-2.jpeg?alt=media&token=4436356d-8fdb-4d24-b6da-b8d0a7a10420',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Posada%20Marmacrisli%2Fposada-3.jpeg?alt=media&token=913594c6-2e30-447b-bffe-b707936551bd'
      ],
      ubicacion: { latitud: 8.214208, longitud: -73.237888 },
      abierto: false 
    },
    {
      nombre: 'Tavolandia Glamping',
      descripcion: 'Dirección: La Playa, Norte de Santander<br>Teléfono: 3107961422',
      imagenes: [
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Tavolandia%2Ftavo%203.jpeg?alt=media&token=c1c66959-2e97-4c82-9ce4-224d1eecdb91',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Tavolandia%2Ftavo%202.jpeg?alt=media&token=a85d6f6d-b909-4c07-9ac1-e3e0267a16ef',
        'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/Tavolandia%2Ftavo%201.jpeg?alt=media&token=7426e4ac-193d-4666-9437-fbb1d87a962e'
      ],
      ubicacion: { latitud: 8.2151537, longitud: -73.235304 },
      abierto: false 
    },

    
  ];

  toggleList(hotel: any) {
    hotel.abierto = !hotel.abierto;
  }
  ngOnInit() {}

  async obtenerUbicacionActual(): Promise<number[] | null> {
    const position = await Geolocation.getCurrentPosition();
    if (position && position.coords) {
      return [position.coords.longitude, position.coords.latitude];
    }
    return null;
  }

  async verEnMapa(hotel: any) {
    this.mostrarRutaEnMapa(hotel.ubicacion);
  }
  
  async mostrarRutaEnMapa(destino: { latitud: number; longitud: number }) {
    const coordinates = await this.obtenerUbicacionActual();
  
    if (coordinates) {
      const enlaceMapa = `https://www.google.com/maps/dir/?api=1&origin=${coordinates[1]},${coordinates[0]}&destination=${destino.latitud},${destino.longitud}&travelmode=driving`;
      window.open(enlaceMapa, '_system');
    } else {
      console.error('No se pudo obtener la ubicación del usuario.');
    }
  }
}
