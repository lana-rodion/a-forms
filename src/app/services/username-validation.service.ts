import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameValidationService implements AsyncValidator {
  // The validate method is an asynchronous validator that checks if the username is available.
  // It returns an observable that emits either a validation error or null.
  // The validateUserName method checks if the username is in a static array of taken usernames.
  // If the username is found in the array, it returns true, indicating that the username is not available.

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.validateUserName(control.value).pipe(
      map((duplicateUserAvailable) => {
        if (duplicateUserAvailable) {
          return { userNameNotAvailable: true };
        } else {
          return null;
        }
      }),
      catchError(() => of(null))
    );
  }

  /* A static array is used to validate the availability of user names.
   * Ideally it should be a service call to the server to search the value from a database.
   */
  private validateUserName(username: string): Observable<boolean> {
    const UserList = ['ankit', 'admin', 'user', 'superuser'];
    return of(UserList.includes(username.toLocaleLowerCase())).pipe(
      delay(1000)
    );
  }
}
