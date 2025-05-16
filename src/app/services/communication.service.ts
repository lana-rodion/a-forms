import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private dataStream = new BehaviorSubject<string>('Initial message');
  currentData$ = this.dataStream.asObservable();

  transmitData(newMessage: string) {
    this.dataStream.next(newMessage);
  }
}
