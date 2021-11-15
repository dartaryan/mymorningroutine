import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css'],
})
export class LogoutButtonComponent {
  daySign: string;

  dayInfo$ = this.uiService
    .getSignPhrase()
    .pipe(tap((info) => (this.daySign = info[0])));

  constructor(private authService: AuthService, private uiService: UiService) {}

  logOut() {
    this.authService.SignOut();
  }
}
