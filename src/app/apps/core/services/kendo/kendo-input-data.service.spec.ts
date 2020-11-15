import { TestBed } from '@angular/core/testing';

import { KendoInputDataService } from './kendo-input-data.service';

describe('KendoInputDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KendoInputDataService = TestBed.get(KendoInputDataService);
    expect(service).toBeTruthy();
  });
});
