import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMethodisteComponent } from './login-methodiste.component';

describe('LoginMethodisteComponent', () => {
  let component: LoginMethodisteComponent;
  let fixture: ComponentFixture<LoginMethodisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMethodisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMethodisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
