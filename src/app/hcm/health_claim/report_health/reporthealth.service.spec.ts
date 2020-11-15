import { TestBed } from '@angular/core/testing';

import { ReporthealthService } from './reporthealth.service';

describe('ReporthealthService', () => {
  let service: ReporthealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporthealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
