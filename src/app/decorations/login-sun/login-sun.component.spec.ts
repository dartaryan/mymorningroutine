import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSunComponent } from './login-sun.component';

describe('LoginSunComponent', () => {
  let component: LoginSunComponent;
  let fixture: ComponentFixture<LoginSunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
