import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmethodisteComponent } from './editmethodiste.component';

describe('EditmethodisteComponent', () => {
  let component: EditmethodisteComponent;
  let fixture: ComponentFixture<EditmethodisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmethodisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmethodisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
