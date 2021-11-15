import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayBgComponent } from './day-bg.component';

describe('DayBgComponent', () => {
  let component: DayBgComponent;
  let fixture: ComponentFixture<DayBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
