import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoCadastroComponent } from './medicamento-cadastro.component';

describe('MedicamentoCadastroComponent', () => {
  let component: MedicamentoCadastroComponent;
  let fixture: ComponentFixture<MedicamentoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
