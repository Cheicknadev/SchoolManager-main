import { TestBed } from '@angular/core/testing';

import { AbsenceerviceService } from './absenceervice.service';

describe('AbsenceerviceService', () => {
  let service: AbsenceerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbsenceerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
