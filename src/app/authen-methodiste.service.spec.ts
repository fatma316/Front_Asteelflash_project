import { TestBed } from '@angular/core/testing';

import { AuthenMethodisteService } from './authen-methodiste.service';

describe('AuthenMethodisteService', () => {
  let service: AuthenMethodisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenMethodisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
