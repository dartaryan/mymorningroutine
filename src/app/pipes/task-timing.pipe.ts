import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/Task';

@Pipe({
  name: 'taskTiming',
})
export class TaskTimingPipe implements PipeTransform {
  transform(tasks: Task[], filter: string): Task[] {
    const timeTasks = tasks.filter((task) => {
       return task[filter] === true;
    });
    return timeTasks;
  }
}
