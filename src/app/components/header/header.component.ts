import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable, tap } from 'rxjs';
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
  dayLight: string;
  time$ = this.uiService.getTime();

  dayMode$ = this.uiService.getTime().pipe(
    tap((time) => {
      const daysign = time.toLocaleString('en-US').split(' ')[2];
      const hour = time.getHours();
      if (daysign === 'PM' && hour >= 18) {
        this.dayLight = 'PM';
      } else {
        this.dayLight = 'AM';
      }
    })
  );

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
