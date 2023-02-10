import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuillenjonatanInicioComponent } from './guillenjonatan-inicio.component';

describe('GuillenjonatanInicioComponent', () => {
  let component: GuillenjonatanInicioComponent;
  let fixture: ComponentFixture<GuillenjonatanInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuillenjonatanInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuillenjonatanInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
