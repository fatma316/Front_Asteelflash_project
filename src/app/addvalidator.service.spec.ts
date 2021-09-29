import { TestBed } from '@angular/core/testing';

import { AddvalidatorService } from './addvalidator.service';

describe('AddvalidatorService', () => {
  let service: AddvalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddvalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
