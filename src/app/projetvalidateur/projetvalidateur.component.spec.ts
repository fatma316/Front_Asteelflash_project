import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetvalidateurComponent } from './projetvalidateur.component';

describe('ProjetvalidateurComponent', () => {
  let component: ProjetvalidateurComponent;
  let fixture: ComponentFixture<ProjetvalidateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetvalidateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetvalidateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
