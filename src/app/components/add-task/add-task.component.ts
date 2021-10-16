import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  text: string = '';
  icon: any = '☀️';
  done: boolean = false;
  step: any;
  showAddTask: boolean = true;
  subscription: Subscription;
  toggled: boolean = false;
  @Input() emoj: EventEmitter<any> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}


  handleSelection(emoj: { char: string }) {
    this.icon = emoj.char;
    this.toggled = !this.toggled
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
    this.icon = '☀️';
    this.done = false;
    this.step = 1;
  }
}
