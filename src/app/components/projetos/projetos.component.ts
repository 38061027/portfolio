import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';




@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent implements OnInit{


  @ViewChild('carouselExampleControls', { static: false }) carousel?: ElementRef;

  repository: any
  languages: any


 nameAtual!: string


  constructor(private sharedService: SharedServiceService) {}



  ngOnInit(): void {
      this.getRepos()

  }


getRepos(){
  this.sharedService.getApiGitHub().subscribe(res => this.repository = res)
}








}
