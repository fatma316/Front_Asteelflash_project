import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoperateurComponent } from './editoperateur.component';

describe('EditoperateurComponent', () => {
  let component: EditoperateurComponent;
  let fixture: ComponentFixture<EditoperateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditoperateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoperateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
