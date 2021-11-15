import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '@angular/fire/auth';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  title: string = ' Morning Routine';
  displayName = 'My';
  userPhoto = 'https://cdn-icons-png.flaticon.com/512/169/169367.png';
  user: User;
  dayPhrase: string;
  daySign: string;

  dayInfo$ = this.uiService
    .getSignPhrase()
    .pipe(
      tap((info) => ((this.daySign = info[0]), (this.dayPhrase = info[1])))
    );

  time$ = this.uiService.getTime();

  user$ = this.authService.getAuthState().pipe(
    tap((user) => {
      if (user) {
        this.displayName = user.displayName.split(' ')[0] + "'s";
        this.userPhoto = user.photoURL
          ? user.photoURL
          : 'https://cdn-icons-png.flaticon.com/512/169/169367.png';
      } else {
        this.displayName = 'My';
      }
    })
  );

  constructor(private authService: AuthService, private uiService: UiService) {}

  logOut() {
    this.authService.SignOut();
  }
}
