import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Task';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(tasks: Task[]): Task[] {
    tasks.sort((a: Task, b: Task) => {
      let ae = a.step;
      let be = b.step;
      if (ae == be) return 0;
      return false ? (ae > be ? -1 : 1) : be > ae ? -1 : 1;
    });
    return tasks;
  }
}
