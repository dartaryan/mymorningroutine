import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  reminder: boolean = false;
  step: number = 1;

  constructor() {}

  ngOnInit(): void {}
  toggled: boolean = false;
  handleSelection(event: { char: any }) {
    console.log(event.char);
  }

  onSubmit() {
    if (!this.text) {
      alert('Please Add A Task');
      return;
    }
    const newTask = {
      text: this.text,
      icon: this.icon,
      reminder: this.reminder,
      step: this.step,
    };

    // @todo emit event

    this.onAddTask.emit(newTask);

    this.text = '';
    this.icon = '';
    this.reminder = false;
    this.step = 1;
  }
}
