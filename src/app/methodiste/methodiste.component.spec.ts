import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodisteComponent } from './methodiste.component';

describe('MethodisteComponent', () => {
  let component: MethodisteComponent;
  let fixture: ComponentFixture<MethodisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
