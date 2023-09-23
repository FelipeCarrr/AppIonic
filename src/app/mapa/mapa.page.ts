import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  @Input() latitud!: number;
  @Input() longitud!: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Obtiene la latitud y longitud del sitio turístico desde la ruta
    this.activatedRoute.queryParams.subscribe((params) => {
      this.latitud = Number(params['latitud']);
      this.longitud = Number(params['longitud']);
    });
  }
}
