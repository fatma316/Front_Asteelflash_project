import { TestBed } from '@angular/core/testing';

import { MethodisteService } from './methodiste.service';

describe('MethodisteService', () => {
  let service: MethodisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
