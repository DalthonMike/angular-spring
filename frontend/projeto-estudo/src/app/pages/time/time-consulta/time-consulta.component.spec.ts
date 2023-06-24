import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeConsultaComponent } from './time-consulta.component';

describe('TimeConsultaComponent', () => {
  let component: TimeConsultaComponent;
  let fixture: ComponentFixture<TimeConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
