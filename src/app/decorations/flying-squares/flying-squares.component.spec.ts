import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingSquaresComponent } from './flying-squares.component';

describe('FlyingSquaresComponent', () => {
  let component: FlyingSquaresComponent;
  let fixture: ComponentFixture<FlyingSquaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyingSquaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingSquaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
