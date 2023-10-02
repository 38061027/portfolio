import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';


@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})


export class TecnologiasComponent {

    tecnogias: any[] = [
  {name: 'HTML', class: 'fa-brands fa-html5'},
  {name: 'CSS', class: 'fa-brands fa-css3-alt'},
  {name: 'JavaScript', class: 'fa-brands fa-js'},
  {name: 'Angular', class: 'fa-brands fa-angular'},
  {name: 'Bootstrap', class: 'fa-brands fa-bootstrap'},
  {name: 'SASS', class: 'fa-brands fa-sass'},
  ]

  constructor(private sharedService: SharedServiceService) {}

  public funcaoCompartilhada(): void {
    this.sharedService.menuShow();
  }


}
