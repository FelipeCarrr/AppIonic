import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  lugares = [
    {
      nombre: 'Iglesia San Juan',
      descripcion: 'Hermosa iglesia en el centro de la ciudad.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/iglesia.jpg?alt=media&token=cb37c52b-e6b9-4b26-8e03-c5f8cc93f7bd',
      ubicacion: { latitud: 8.213936, longitud: -73.238012 },
    },
    {
      nombre: 'Los Pinos',
      descripcion: 'Los pinos, es un terreno donde se sembraron una serie de pinos y esto ha generado un paisaje muy apetecido por propios y foráneos para visitar los fines de semana y realizar actividades de campin y para los amantes de la fotografía.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/pinos2.jpg?alt=media&token=2c84c1ee-d709-42e3-82f8-98113d9f95db',
      ubicacion: { latitud: 8.2233212, longitud: -73.2308506 },
    },
    {
      nombre: 'Tavolandia',
      descripcion: 'Glamping, Piscina y Restaurante. Somos un lugar para que te relajes con tu pareja o en familia, tenemos los únicos domos geodesicos de la región con la mejor vista panorámica de uno de los pueblos más bonitos de Colombia, servicio de piscina y restaurante. Cerca de todo lo que puedes visitar en la Playa de Belén.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/tavolandia%20.png?alt=media&token=90cfbac9-e7e9-42fd-9e11-8c9963c11df8',
      ubicacion: { latitud: 8.2151537, longitud: -73.235304 },
    },
    {
      nombre: 'Los Estoraques',
      descripcion: 'El área natural única Los Estoraques es una de las más pequeñas áreas protegidas de Colombia.',
      imagen: 'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/1.jpeg?alt=media&token=04f76317-5fd7-44a5-b66b-8b4e03840d0a',
      ubicacion: { latitud: 8.2202032, longitud: -73.2369913 },
    }
   
  ];

  ngOnInit() {}

 
    async obtenerUbicacionActual(): Promise<number[] | null> {
      const position = await Geolocation.getCurrentPosition();
      if (position && position.coords) {
        return [position.coords.longitude, position.coords.latitude];
      }
      return null;
    }
  
    async verEnMapa(lugar: any) {
      this.mostrarRutaEnMapa(lugar.ubicacion);
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
