import { Injectable } from '@angular/core';
import { interval, mergeMap, Observable, of, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  daysign: string;
  hour: number;
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
  getDaySign(): Observable<string> {
    this.getTime().pipe(
      tap((time) => {
        this.daysign = time.toLocaleString('en-US').split(' ')[2];
        this.hour = time.getHours();
      })
    );
    if (this.daysign === 'PM' && this.hour >= 18) {
      return of('PM');
    } else {
      return of('AM');
    }
  }
}
