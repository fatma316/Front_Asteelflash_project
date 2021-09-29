import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmethodisteComponent } from './addmethodiste.component';

describe('AddmethodisteComponent', () => {
  let component: AddmethodisteComponent;
  let fixture: ComponentFixture<AddmethodisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmethodisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmethodisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
