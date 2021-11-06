import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Task } from '../Task';

@Pipe({
  name: 'userTasks',
})
export class UserTasksPipe implements PipeTransform {
  transform(tasks: Task[], userData: any): Task[] {
    if(!tasks) return [];
    if(!userData) return [];
    return tasks.filter((item) => {
      return Object.keys(item).some((key) => {
        return String(item[key]).includes(userData);
      });
    });
  }
}

// tasks.filter((task: Task) => {
//   let uid = userData;
//   let taskId = task.uid;
//   console.log(task.uid, uid, task.uid === uid, tasks);
//   return task.done === true;
// }
// transform(tasks: Task[]): Task[] {
//   tasks.sort((a: Task, b: Task) => {
//     let ae = a.step;
//     let be = b.step;
//     if (ae == be) return 0;
//     return false ? (ae > be ? -1 : 1) : be > ae ? -1 : 1;
//   });
//   return tasks;
// }
// }

// transform(tasks: Task[], userData: any): Task[] {
//   const uid = userData;
//   let userTasks: Task[] = tasks.filter((task) => {
//     task.uid === uid;
//     console.log(task.uid, uid, task.uid === uid);
//   });
//   console.log(userTasks)
//   return userTasks;
