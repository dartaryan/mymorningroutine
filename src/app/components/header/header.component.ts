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
export class HeaderComponent  {
  title: string = ' Morning Routine';

  displayName = 'My';

  user: User;

  user$ = this.authService.getAuthState().pipe(
    tap((user) => {
      if (user) {
        this.displayName = user.displayName.split(' ')[0] + "'s";
      } else {
        this.displayName = 'My';
      }
    })
  );

  constructor(private authService: AuthService,private cd:ChangeDetectorRef) {}

  // ngOnInit(): void {
  //   this.authService.getAuthState().pipe(
  //     tap((user) => {
  //       if (user) {
  //         this.user = user;
  //         this.displayName = user.displayName.split(' ')[0] + "'s";
  //       } else {
  //         this.displayName = 'My';
  //       }
  //       this.cd.markForCheck();
  //     })
  //   ).subscribe();
  // }

  logOut() {
    this.authService.SignOut();
  }
}
