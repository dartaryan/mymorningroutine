import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  HostListener,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { Timing } from 'src/app/Timing';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  icon: any = '☀️';
  done: boolean = false;
  step: number = 1;
  showAddTask: boolean = false;
  subscription: Subscription;
  toggled: boolean = false;
  rowspan: number;
  screenEmojiSizes = {
    small: [6, 21, 10],
    medium: [7, 25, 8],
    large: [12, 25, 5],
  };
  Morning: boolean = false;
  Afternoon: boolean = true;
  Evening: boolean = false;
  Night: boolean = false;
  // size: [perLine,emojiSize,rowspan]

  subtimings: Timing[] = [
    { name: 'Morning', show: false, description: '6:00am - 11:59am' },
    { name: 'Afternoon', show: false, description: '12:00pm - 5:59pm' },
    { name: 'Evening', show: false, description: '6:00pm - 9:59pm' },
    { name: 'Night', show: false, description: '10:00pm - 5:59am' },
  ];

  emojiState($toggeldEmoji: boolean) {
    this.toggled = $toggeldEmoji;
  }

  constructor(private uiService: UiService, public authService: AuthService) {
    this.emojiProperties(window.innerWidth);
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.emojiProperties(event.target.innerWidth);
  }

  emojiProperties(width: number) {
    switch (true) {
      case width <= 767:
        this.rowspan = this.screenEmojiSizes['small'][2];
        break;
      case width > 768 && width <= 999:
        this.rowspan = this.screenEmojiSizes['medium'][2];
        break;
      case width > 1000:
        this.rowspan = this.screenEmojiSizes['large'][2];
        break;
      default:
        this.rowspan = this.screenEmojiSizes['small'][2];
        break;
    }
  }

  onChosenEmoj(emoj: any) {
    this.icon = emoj;
  }

  onSubmit() {
    if (!this.text) {
      alert('Please Add A Task');
      return;
    }
    const newTask = {
      text: this.text,
      icon: this.icon,
      done: this.done,
      step: this.step,
      id: '',
      uid: this.authService.currentUser.uid,
      morning: this.subtimings[0].show,
      afternoon: this.subtimings[1].show,
      evening: this.subtimings[2].show,
      night: this.subtimings[3].show,
    };
    console.log(this.subtimings);
    console.log(newTask);
    this.onAddTask.emit(newTask);

    this.text = '';
    this.icon = '☀️';
    this.done = false;
    this.step = 1;
    this.Morning = false;
    this.Afternoon = false;
    this.Evening = false;
    this.Night = false;
  }
}
