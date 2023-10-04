import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SharedServiceService } from './shared-service.service';
import { HttpClientModule } from '@angular/common/http';


describe('SharedServiceService', () => {
  let service: SharedServiceService;
  let fixture: ComponentFixture<SharedServiceService>;
  let httpTestingController: HttpTestingController;
  let url:any;


  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientModule,HttpClientTestingModule],
      providers: [SharedServiceService]
    });

    service = TestBed.inject(SharedServiceService);
   httpTestingController = TestBed.inject(HttpTestingController)
   url = 'https://api.github.com/users/38061027/repos'
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve realizar chamada GET para obter informações do usuários', ()=>{
    service.getApiGitHub().subscribe()

    const request =  httpTestingController.expectOne(`${url}`)
    request.flush({})
    expect(request.request.method).toBe('GET')


  })


});
function pect(menuShow: () => void) {
  throw new Error('Function not implemented.');
}

