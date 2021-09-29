import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMethoComponent } from './dashboard-metho.component';

describe('DashboardMethoComponent', () => {
  let component: DashboardMethoComponent;
  let fixture: ComponentFixture<DashboardMethoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMethoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMethoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
