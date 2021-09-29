import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardValidatorComponent } from './dashboard-validator.component';

describe('DashboardValidatorComponent', () => {
  let component: DashboardValidatorComponent;
  let fixture: ComponentFixture<DashboardValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
