import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  accordionOpen = false;

  toggleAccordion() {
    this.accordionOpen = !this.accordionOpen;
  }
}
