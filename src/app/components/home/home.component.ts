import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');

    if (menuMobile?.classList.contains('open')) {
      return menuMobile.classList.remove('open')
    } else {
      return menuMobile?.classList.add('open')
    }
  }



}
