import { TestBed } from '@angular/core/testing';

import { SharedServiceService } from './shared-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';


describe('SharedServiceService', () => {
  let service: SharedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
  
      imports: [HttpClientModule]
    });
    service = TestBed.inject(SharedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
