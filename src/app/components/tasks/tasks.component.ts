import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { map } from 'rxjs/operators';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  Firestore,
  setDoc,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  tasks$ = collectionData(collection(this.firestore, 'tasks')).pipe(
    map((tasks) => tasks as Task[])
  );

  constructor(private taskService: TaskService, private firestore: Firestore) {}

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

  async addTask(task: Task) {
    // this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
   
    await addDoc(collection(this.firestore, 'tasks'), task);

  }
  sortTasks(tasks: Task[]): any {
    console.log('before: ', tasks);
    tasks.sort(function (a, b) {
      console.log(a.step);
      console.log(b.step);
      return a.step - b.step;
    });
    console.log('after: ', tasks);
    return tasks;
  }
}
