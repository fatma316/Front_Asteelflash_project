import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationTableauComponent } from './validation-tableau.component';

describe('ValidationTableauComponent', () => {
  let component: ValidationTableauComponent;
  let fixture: ComponentFixture<ValidationTableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationTableauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
