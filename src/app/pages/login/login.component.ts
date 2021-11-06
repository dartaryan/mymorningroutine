import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  constructor(public authService: AuthService) { }

  ngOnInit(): void {}
}