import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoperateurComponent } from './addoperateur.component';

describe('AddoperateurComponent', () => {
  let component: AddoperateurComponent;
  let fixture: ComponentFixture<AddoperateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoperateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
