import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCadastroComponent } from './time-cadastro.component';

describe('TimeCadastroComponent', () => {
  let component: TimeCadastroComponent;
  let fixture: ComponentFixture<TimeCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
