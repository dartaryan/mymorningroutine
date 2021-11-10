import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  displayName: string = '';
  userPhoto: string = '';

  user: User;

  user$ = this.authService.getAuthState().pipe(
    tap((user) => {
      if (user) {
        this.displayName = user.displayName;
        this.userPhoto = user.photoURL;
      } else {
        this.displayName = '';
        this.userPhoto = "https://cdn-icons-png.flaticon.com/512/169/169367.png";
      }
    })
  );

  constructor(public authService: AuthService) {}
  ngOnInit() {}

  setNameAndPhoto() {
    // if (this.authService.isLoggedIn) {
    //   console.log(this.authService.userData)
    //   this.userName = this.authService.userData.displayName;
    //   this.userPhoto = this.authService.userData.photoURL;
    // } else {
    //   this.userName = 'Good Morning!';
    //   this.userPhoto = 'https://cdn-icons-png.flaticon.com/512/382/382576.png';
    // }
  }
}
