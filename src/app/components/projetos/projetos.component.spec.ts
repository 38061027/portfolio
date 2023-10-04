import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosComponent } from './projetos.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

describe('ProjetosComponent', () => {
  let component: ProjetosComponent;
  let fixture: ComponentFixture<ProjetosComponent>;
  let httpTestingController: HttpTestingController
  let url: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpTestingController],
      declarations: [ ProjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
    url = 'https://api.github.com/users/38061027/repos'
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 



});
