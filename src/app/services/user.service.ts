import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private existingUsernames = ['Batman', 'Superman', 'Joker', 'Luthor'];

  checkIfUsernameExists(value: string) {
    return of(this.existingUsernames.some((a) => a === value)).pipe(
      delay(1000)
    );
  }
}
