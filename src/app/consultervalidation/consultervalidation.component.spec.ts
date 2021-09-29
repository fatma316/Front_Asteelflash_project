import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultervalidationComponent } from './consultervalidation.component';

describe('ConsultervalidationComponent', () => {
  let component: ConsultervalidationComponent;
  let fixture: ComponentFixture<ConsultervalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultervalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultervalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
