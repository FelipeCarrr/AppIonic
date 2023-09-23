import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sitiosTurismo = [
    {
      nombre: 'Iglesia Santa María',
      foto: 'https://firebasestorage.googleapis.com/v0/b/turismoapp-a9bfb.appspot.com/o/iglesia.jpg?alt=media&token=cb37c52b-e6b9-4b26-8e03-c5f8cc93f7bd',
      ubicacion: {
        latitud: 123.456, // coordenada latitud
        longitud: 789.123, // coordenada longitud
      },
      descripcion: 'Una hermosa iglesia en la región.',
    },
    // Agrega más sitios turísticos aquí
  ];
  constructor(private router: Router) {}

  async mostrarMapa(sitio: any) {
    // Redirige a la página de mapa con las coordenadas
    this.router.navigate(['/mapa'], {
      queryParams: {
        latitud: sitio.ubicacion.latitud,
        longitud: sitio.ubicacion.longitud,
      },
    });
  }


}
