import { TestBed } from '@angular/core/testing';

import { ValidataiondetailService } from './validataiondetail.service';

describe('ValidataiondetailService', () => {
  let service: ValidataiondetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidataiondetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
