import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-day-bg',
  templateUrl: './day-bg.component.html',
  styleUrls: ['./day-bg.component.css'],
})
export class DayBgComponent {
  daySign: string = '';

  dayInfo$ = this.uiService
  .getSignPhrase()
  .pipe(tap((info) => (this.daySign = info[0])));
  

  constructor(private uiService: UiService) {
    
  }
}
