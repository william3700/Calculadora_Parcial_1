import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCientificaComponent } from './calculadora-cientifica.component';

describe('CalculadoraCientificaComponent', () => {
  let component: CalculadoraCientificaComponent;
  let fixture: ComponentFixture<CalculadoraCientificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraCientificaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraCientificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
