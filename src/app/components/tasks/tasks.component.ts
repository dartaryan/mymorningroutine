import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggledone(task: Task) {
    task.done = !task.done;
    this.taskService.updateTaskdone(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
  sortTasks(tasks: Task[]):any {
    console.log("before: ",tasks)
    tasks.sort(function (a, b) {
      console.log(a.step)
      console.log(b.step)
      return a.step - b.step;
    });
    console.log("after: ",tasks)
    return tasks
  }
}
