import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateurComponent } from './validateur.component';

describe('ValidateurComponent', () => {
  let component: ValidateurComponent;
  let fixture: ComponentFixture<ValidateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
