import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public subject = new Subject<any>();
  public event = this.subject.asObservable();

  public publish(data: any) {
    this.subject.next(data);
  }
}
