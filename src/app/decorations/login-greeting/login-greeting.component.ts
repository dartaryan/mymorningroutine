import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login-greeting',
  templateUrl: './login-greeting.component.html',
  styleUrls: ['./login-greeting.component.css']
})
export class LoginGreetingComponent implements OnInit {

  dayPhrase: string = '';

  dayInfo$ = this.uiService
    .getSignPhrase()
    .pipe(tap((info) => (this.dayPhrase = info[1])));

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
  }

}
