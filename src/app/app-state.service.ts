import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public _subject = new Subject<any>();
  public event = this._subject.asObservable();

  public publish(data: any){
    this._subject.next(data);
  }
}
