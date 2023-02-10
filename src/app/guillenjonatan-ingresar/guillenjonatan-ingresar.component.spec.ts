import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuillenjonatanIngresarComponent } from './guillenjonatan-ingresar.component';

describe('GuillenjonatanIngresarComponent', () => {
  let component: GuillenjonatanIngresarComponent;
  let fixture: ComponentFixture<GuillenjonatanIngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuillenjonatanIngresarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuillenjonatanIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
