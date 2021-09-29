import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultervalidationoperatorComponent } from './consultervalidationoperator.component';

describe('ConsultervalidationoperatorComponent', () => {
  let component: ConsultervalidationoperatorComponent;
  let fixture: ComponentFixture<ConsultervalidationoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultervalidationoperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultervalidationoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
