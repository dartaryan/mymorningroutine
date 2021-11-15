import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  icon: any = '☀️';
  done: boolean = false;
  step: number = 1;
  showAddTask: boolean = false;
  subscription: Subscription;
  toggled: boolean = false;

  timing: Timing = {
    name: 'All-day',
    completed: false,
    subtimings: [
      { name: 'Morning', completed: false, description: '6:00AM - 11:59AM' },
      { name: 'Afternoon', completed: false, description: '12:00PM - 5:59PM' },
      { name: 'Evening', completed: false, description: '6:00PM - 9:59PM' },
      { name: 'Night', completed: false, description: '10:00PM - 5:59AM' },
    ],
  };

  allComplete: boolean = false;

  constructor(private uiService: UiService, public authService: AuthService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  handleSelection(emoj: { char: string }) {
    this.icon = emoj.char;
    this.toggled = !this.toggled;
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
    };
    this.onAddTask.emit(newTask);

    this.text = '';
    this.icon = '☀️';
    this.done = false;
    this.step = 1;
  }
  updateAllComplete() {
    this.allComplete =
      this.timing.subtimings != null &&
      this.timing.subtimings.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.timing.subtimings == null) {
      return false;
    }
    return (
      this.timing.subtimings.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.timing.subtimings == null) {
      return;
    }
    this.timing.subtimings.forEach((t) => (t.completed = completed));
  }
}
