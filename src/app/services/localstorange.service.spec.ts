import { TestBed } from '@angular/core/testing';

import { LocalstorangeService } from './localstorange.service';

describe('LocalstorangeService', () => {
  let service: LocalstorangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
