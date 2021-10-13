import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = 'New Task';
  icon: string = '😃';
  done: boolean = false;
  step: number = 1;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  // toggled: boolean = false;
  // handleSelection(event: { char: any }) {
  //   this.icon =  event.char
  // }

  toggled: boolean = false;
  handleSelection($event: { char: string; }) {
  this.icon += $event.char;
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
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.icon = '';
    this.done = false;
    this.step = 1;
  }
}
