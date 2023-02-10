import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuillenjonatanLoginComponent } from './guillenjonatan-login.component';

describe('GuillenjonatanLoginComponent', () => {
  let component: GuillenjonatanLoginComponent;
  let fixture: ComponentFixture<GuillenjonatanLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuillenjonatanLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuillenjonatanLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
