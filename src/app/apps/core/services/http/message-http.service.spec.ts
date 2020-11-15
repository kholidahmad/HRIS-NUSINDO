import { TestBed } from '@angular/core/testing';

import { MessageHttpService } from './message-http.service';

describe('MessageHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageHttpService = TestBed.get(MessageHttpService);
    expect(service).toBeTruthy();
  });
});
