import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login-sun',
  templateUrl: './login-sun.component.html',
  styleUrls: ['./login-sun.component.css'],
})
export class LoginSunComponent implements OnInit {
  daySign: string = '';

  dayInfo$ = this.uiService
    .getSignPhrase()
    .pipe(tap((info) => (this.daySign = info[0])));

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}
}
