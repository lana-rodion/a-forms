import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  public fruitIsApproved$(fruit: string): Observable<boolean> {
    let approvedFruit: Array<string> = [
      'apple',
      'orange',
      'banana',
      'pear',
      'melon',
    ];
    let isApproved: boolean = approvedFruit.includes(fruit);
    return of(isApproved).pipe(delay(1000));
  }
}
