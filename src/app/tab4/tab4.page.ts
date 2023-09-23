import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{

  openCards: string[] = [];

  toggleCard(cardId: string) {
    const index = this.openCards.indexOf(cardId);
    if (index === -1) {
      this.openCards.push(cardId);
    } else {
      this.openCards.splice(index, 1);
    }
  }

  isCardOpen(cardId: string): boolean {
    return this.openCards.includes(cardId);
  }

}
