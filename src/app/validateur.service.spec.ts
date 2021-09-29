import { TestBed } from '@angular/core/testing';

import { ValidateurService } from './validateur.service';

describe('ValidateurService', () => {
  let service: ValidateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
