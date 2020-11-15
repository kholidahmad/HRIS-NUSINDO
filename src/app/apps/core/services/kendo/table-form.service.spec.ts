import { TestBed } from '@angular/core/testing';

import { TableFormService } from './table-form.service';

describe('TableFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableFormService = TestBed.get(TableFormService);
    expect(service).toBeTruthy();
  });
});
