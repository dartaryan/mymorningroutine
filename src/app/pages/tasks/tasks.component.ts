import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
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
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  faSun = faSun;
  faCloudSun = faCloudSun;
  faCloudMoon = faCloudMoon;
  faMoon = faMoon;
  tasks: Task[] = [];
  morning: string = 'morning';
  afternoon: string = 'afternoon';
  evening: string = 'evening';
  night: string = 'night';
  tasks$ = collectionData(collection(this.firestore, 'tasks')).pipe(
    map((tasks) => tasks as Task[])
  );

  constructor(private firestore: Firestore, public authService: AuthService) {}

  ngOnInit(): void {}

  async deleteTask(task: Task) {
    await deleteDoc(doc(this.firestore, 'tasks', task.id));
  }

  async toggledone(task: Task) {
    const doneState = !task.done;
    await updateDoc(doc(this.firestore, 'tasks', task.id), {
      done: doneState,
    });
  }

  async addTask(task: Task) {
    await addDoc(collection(this.firestore, 'tasks'), task)
      .then((docRef) => setDoc(docRef, { id: docRef.id }, { merge: true }))
      .catch((error) => console.error('Error adding document: ', error));
  }
}
