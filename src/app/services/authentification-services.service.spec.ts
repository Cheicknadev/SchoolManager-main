import { TestBed } from '@angular/core/testing';

import { AuthentificationServicesService } from './authentification-services.service';

describe('AuthentificationServicesService', () => {
  let service: AuthentificationServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentificationServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
