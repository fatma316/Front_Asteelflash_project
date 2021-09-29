import { TestBed } from '@angular/core/testing';

import { EditoperateurService } from './editoperateur.service';

describe('EditoperateurService', () => {
  let service: EditoperateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditoperateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
