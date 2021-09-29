import { TestBed } from '@angular/core/testing';

import { EditmethodisteService } from './editmethodiste.service';

describe('EditmethodisteService', () => {
  let service: EditmethodisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditmethodisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
