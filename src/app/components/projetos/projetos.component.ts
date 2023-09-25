import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent implements OnInit, AfterViewInit{
  @ViewChild('carouselExampleControls', { static: false }) carousel?: ElementRef;

  repository: any
  languages: any


 nameAtual!: string


  constructor(private sharedService: SharedServiceService) {}

  public funcaoCompartilhada(): void {
    this.sharedService.menuShow();
  }


  ngOnInit(): void {
      this.getRepos()
      this.getLanguages()

  }

  ngAfterViewInit(): void {
    this.getNameAtual();
  }

getRepos(){
  this.sharedService.getApiGitHub().subscribe(res => this.repository = res)
}

getLanguages(){
  this.sharedService.getLanguages(`https://api.github.com/repos/38061027/calculadora/languages`).subscribe((res)=>{
    if(res){
      this.languages = res
    }
  })
}


getNameAtual(): void {
  if (this.carousel) {
    const currentItem = this.carousel.nativeElement.querySelector('.carousel-item.active');
    if (currentItem) {
      const nameElement = currentItem.querySelector('h1');
      if (nameElement) {
        this.nameAtual = nameElement.textContent;
      }
    }
  }
}





}
