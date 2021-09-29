import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperateurValidationComponent } from './operateur-validation.component';

describe('OperateurValidationComponent', () => {
  let component: OperateurValidationComponent;
  let fixture: ComponentFixture<OperateurValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperateurValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperateurValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
