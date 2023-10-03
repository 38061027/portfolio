import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreComponent } from './sobre.component';
import { HttpClientModule } from '@angular/common/http';

describe('SobreComponent', () => {
  let component: SobreComponent;
  let fixture: ComponentFixture<SobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
