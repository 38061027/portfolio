import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';


@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})


export class TecnologiasComponent {


  constructor(private sharedService: SharedServiceService) {}

  public funcaoCompartilhada(): void {
    this.sharedService.menuShow();
  }
}
