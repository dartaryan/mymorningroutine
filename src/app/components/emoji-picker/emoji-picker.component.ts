import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.css'],
})
export class EmojiPickerComponent implements OnInit {
  toggled: boolean = false;
  icon: string = '☀️';
  @Input() emoj: EventEmitter<string> = new EventEmitter();
  @Output() chosenEmoj: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleEmoji(e: { char: string }) {
    this.icon = e.char;
    this.toggled = !this.toggled;
    const sendEmoj = this.icon;
    this.chosenEmoj.emit(this.icon);
  }

  openEmojis() {
    this.toggled = !this.toggled;
  }
}
