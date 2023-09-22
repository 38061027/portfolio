import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(

    private sharedService: SharedServiceService) {


  }



   public funcaoCompartilhada(): void {
     this.sharedService.menuShow();
  }

  


}
