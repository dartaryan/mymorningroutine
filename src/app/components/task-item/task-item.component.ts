import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task | any;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggledone: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  daySign: string;

  dayInfo$ = this.uiService
    .getSignPhrase()
    .pipe(tap((info) => (this.daySign = info[0])));

  constructor(private uiService: UiService) {}

  ngOnInit(): void {}
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task) {
    this.onToggledone.emit(task);
  }
}
