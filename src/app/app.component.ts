import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  daySign: string = '';
  dayInfo$ = this.uiService
    .getSignPhrase()
    .pipe(tap((info) => (this.daySign = info[0])));

  constructor(private uiService: UiService) {}
}
