import { Component, NgZone, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = ' Morning Routine';
  router: Router;

  constructor(public authService: AuthService) {

  }

  ngOnInit(): void {}

  hasRoute(route: string) {
    return this.router.url === route;
  }

  loggedIn(){
    console.log(this.authService)
    return this.authService.isLoggedIn

  }

  logOut(){
    this.authService.SignOut()
  }

  loggedUser(){
    try {
      return this.authService.userData.displayName.split(" ")[0] +"'s";
    } catch (error) {
      return "My"
      console.log(error);
    }
  }
}
