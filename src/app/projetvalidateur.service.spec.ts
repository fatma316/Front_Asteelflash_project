import { TestBed } from '@angular/core/testing';

import { ProjetvalidateurService } from './projetvalidateur.service';

describe('ProjetvalidateurService', () => {
  let service: ProjetvalidateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetvalidateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
