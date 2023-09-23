import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent {
  obj = [
    {
      name: 'Movies Plataform',
    },
    {
      name: 'Cartão de crédito',
    },
    {
      name: 'Perfil fifa22',
    },
    {
      name: 'Crud tour of heroes',
    },
  ];

  constructor(private sharedService: SharedServiceService) {}

  public funcaoCompartilhada(): void {
    this.sharedService.menuShow();
  }
}
