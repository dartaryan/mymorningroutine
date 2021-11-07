import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Task } from '../Task';

@Pipe({
  name: 'userTasks',
})
export class UserTasksPipe implements PipeTransform {


  transform(tasks: Task[], userData: any): Task[] {
    if (!tasks) return [];
    if (!userData) return [];
    const userTasks = tasks.filter((item) => {
      return Object.keys(item).some((key) => {
        return String(item[key]).includes(userData);
      });
    });

    return userTasks;
  }
}
