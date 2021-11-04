import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { map } from 'rxjs/operators';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  deleteDoc,
  Firestore,
  setDoc,
  updateDoc,
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

  async deleteTask(task: Task) {
    await deleteDoc(doc(this.firestore, 'tasks', task.id));
  }

  async toggledone(task: Task) {
    const doneState = !task.done;
    await updateDoc(doc(this.firestore, 'tasks', task.id), {
      done: doneState,
    });

    this.taskService.updateTaskdone(task).subscribe();
  }

  async addTask(task: Task) {
    await addDoc(collection(this.firestore, 'tasks'), task)
      .then((docRef) => setDoc(docRef, { id: docRef.id }, { merge: true }))
      .catch((error) => console.error('Error adding document: ', error));
  }
}
