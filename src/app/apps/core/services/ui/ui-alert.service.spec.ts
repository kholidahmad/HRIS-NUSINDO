import { TestBed } from '@angular/core/testing';

import { UiAlertService } from './ui-alert.service';

describe('UiAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiAlertService = TestBed.get(UiAlertService);
    expect(service).toBeTruthy();
  });
});
