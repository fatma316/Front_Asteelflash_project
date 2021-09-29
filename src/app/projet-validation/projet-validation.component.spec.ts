import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetValidationComponent } from './projet-validation.component';

describe('ProjetValidationComponent', () => {
  let component: ProjetValidationComponent;
  let fixture: ComponentFixture<ProjetValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
