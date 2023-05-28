import { TestBed } from '@angular/core/testing';

import { ConvocationServiceService } from './convocation-service.service';

describe('ConvocationServiceService', () => {
  let service: ConvocationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvocationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
