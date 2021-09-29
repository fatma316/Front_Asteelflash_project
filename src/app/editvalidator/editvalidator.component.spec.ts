import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvalidatorComponent } from './editvalidator.component';

describe('EditvalidatorComponent', () => {
  let component: EditvalidatorComponent;
  let fixture: ComponentFixture<EditvalidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditvalidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvalidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
