import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-flying-squares',
  templateUrl: './flying-squares.component.html',
  styleUrls: ['./flying-squares.component.css'],
})
export class FlyingSquaresComponent implements OnInit {
  daySign: string = '';
  dayInfo$ = this.uiService
    .getSignPhrase()
    .pipe(tap((info) => (this.daySign = info[0])));

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}
}
