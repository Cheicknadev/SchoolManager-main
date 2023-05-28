import { TestBed } from '@angular/core/testing';

import { EconomeServiceService } from './econome-service.service';

describe('EconomeServiceService', () => {
  let service: EconomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EconomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
