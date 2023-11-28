import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {
  
  constructor(private router: Router) {}


  ngOnInit() {}

  navigateToTab(tabName: string) {
    this.router.navigate([`/tabs/${tabName}`]);
  }
  

}
