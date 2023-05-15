import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';


@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  

  constructor(private sharedService: SharedServiceService) {}

  public funcaoCompartilhada(): void {
    this.sharedService.menuShow();
  }

  
}
