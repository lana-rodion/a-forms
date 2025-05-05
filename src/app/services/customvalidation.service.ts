import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CustomvalidationService {
  // AbstractControl is a base class for all form controls
  // FormGroup is a class that represents a group of form controls
  // ValidatorFn is a function that takes an AbstractControl and returns a validation error object or null
  // The patternValidator function returns a ValidatorFn that checks if the control value matches the regex pattern
  // The regex pattern checks if the control value contains at least
  // one uppercase letter, one lowercase letter, and one digit, and is at least 8 characters long
  // If the password fails the regex check, we will set the invalidPassword property to true.

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

  // The method matchPassword is used to compare the passwords in two fields.
  // These parameters represent the name of the fields to be matched.
  // The method returns a ValidatorFn that takes a FormGroup and checks if the values of the two fields are equal.
  // If the values are not equal, it sets the passwordMismatch error on the confirmPassword control.
  matchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }

      return null; // Explicitly return null at the end
    };
  }

  // The userNameValidator method is an asynchronous validator that checks if the username is available.
  // It takes an AbstractControl as a parameter and returns a Promise
  // that resolves to either an error object or null.
  // The method simulates an asynchronous operation using setTimeout.
  // It checks if the username is in the UserList array.
  userNameValidator(
    userControl: AbstractControl
  ): Promise<{ [key: string]: any } | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  // The validateUserName method checks if the provided username is in the UserList array.
  // It returns true if the username is found, and false otherwise.
  validateUserName(userName: string) {
    const UserList = ['ankit', 'admin', 'user', 'superuser'];
    return UserList.indexOf(userName) > -1;
  }
}
