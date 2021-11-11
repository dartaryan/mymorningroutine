import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { User } from '@angular/fire/auth';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService) {}

  logOut() {
    this.authService.SignOut();
  }
}
