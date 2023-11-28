// app.component.ts
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalImagePage } from './modal-image/modal-image.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  async ngOnInit() {
    const modal = await this.modalController.create({
      component: ModalImagePage,
      componentProps: {},
      cssClass: 'modal-image',
    });

    modal.present();
  }
}
