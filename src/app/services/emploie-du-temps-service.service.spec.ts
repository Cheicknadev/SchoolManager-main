import { TestBed } from '@angular/core/testing';

import { EmploieDuTempsServiceService } from './emploie-du-temps-service.service';

describe('EmploieDuTempsServiceService', () => {
  let service: EmploieDuTempsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploieDuTempsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
