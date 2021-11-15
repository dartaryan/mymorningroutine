import { Injectable } from '@angular/core';
import { interval, map, mergeMap, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  getTime(): Observable<Date> {
    return interval(1000).pipe(mergeMap(() => of(new Date())));
  }

  getSignPhrase(): Observable<string[]> {
    return this.getTime().pipe(
      map((hours) => {
        const hour = hours.getHours();
        switch (true) {
          case hour >= 5 && hour < 12:
            return ['AM', 'Morning'];
          case hour >= 12 && hour < 18:
            return ['AM', 'Afternoon'];
          case hour >= 18 && hour < 22:
            return ['PM', 'Evening'];
          case hour >= 22 || hour < 5:
            return ['PM', 'Night'];
          default:
            break;
        }
        return ['', ''];
      })
    );
  }
}
