import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User | undefined;
  loggedIn: boolean = false;
  userName: string = '';
  userPhoto: string = '';


  constructor(public authService: AuthService) {}
  ngOnInit() {
    
  }

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
