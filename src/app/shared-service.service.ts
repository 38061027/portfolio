import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  public menuShow():void {
     let menuMobile = document.querySelector('.mobile-menu');
 
     if (menuMobile?.classList.contains('open')) {
       return menuMobile.classList.remove('open')
     } else {
       return menuMobile?.classList.add('open')
     }
   }
  constructor() { 
    
   

  }
}
