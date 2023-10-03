import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosComponent } from './projetos.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProjetosComponent', () => {
  let component: ProjetosComponent;
  let fixture: ComponentFixture<ProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ProjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
