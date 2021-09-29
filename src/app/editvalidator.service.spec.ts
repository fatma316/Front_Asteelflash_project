import { TestBed } from '@angular/core/testing';

import { EditvalidatorService } from './editvalidator.service';

describe('EditvalidatorService', () => {
  let service: EditvalidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditvalidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
