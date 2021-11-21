import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { tap } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-emoji-mart',
  templateUrl: './emoji-mart.component.html',
  styleUrls: ['./emoji-mart.component.css'],
})
export class EmojiMartComponent {
  showEmojiPicker = false;
  toggled: boolean = false;
  icon: string = '☀️';
  @Input() emoj: EventEmitter<string> = new EventEmitter();
  @Output() chosenEmoj: EventEmitter<string> = new EventEmitter();
  @Output() toggeldEmoji: EventEmitter<boolean> = new EventEmitter();
  theme: boolean;
  screenEmojiSizes = {
    small: [6, 21, 10],
    medium: [7, 25, 8],
    large: [12, 25, 5],
  };
  // size: [perLine,emojiSize,rowspan]
  perLine: number;
  emojiSize: number;

  constructor(private uiService: UiService) {
    this.emojiProperties(window.innerWidth);
  }

  dayInfo$ = this.uiService
    .getSignPhrase()
    .pipe(tap((info) => (this.theme = info[0] === 'AM' ? false : true)));

  handleEmoji(event) {
    this.icon = event.emoji.native;
    this.toggled = !this.toggled;
    this.chosenEmoj.emit(this.icon);
    this.toggeldEmoji.emit(this.toggled);
  }

  toggleEmojiPicker() {
    this.toggled = !this.toggled;
    this.toggeldEmoji.emit(this.toggled);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.emojiProperties(event.target.innerWidth);
  }

  emojiProperties(width: number) {
    switch (true) {
      case width <= 767:
        this.perLine = this.screenEmojiSizes['small'][0];
        this.emojiSize = this.screenEmojiSizes['small'][1];
        break;
      case width > 768 && width <= 999:
        this.perLine = this.screenEmojiSizes['medium'][0];
        this.emojiSize = this.screenEmojiSizes['medium'][1];
        break;
      case width > 1000:
        this.perLine = this.screenEmojiSizes['large'][0];
        this.emojiSize = this.screenEmojiSizes['large'][1];
        break;
      default:
        this.perLine = this.screenEmojiSizes['small'][0];
        this.emojiSize = this.screenEmojiSizes['small'][1];
        break;
    }
  }

  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger',
  ];
  set = 'twitter' as any;
  size = 16 as any;
}
