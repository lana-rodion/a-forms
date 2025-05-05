import { Directive, forwardRef } from '@angular/core';
import {
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  Validator,
} from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appValidateUserName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ValidateUserNameDirective),
      multi: true,
    },
  ],
})

// The validateUserName directive is an asynchronous validator that checks if the username is available.
// It takes an AbstractControl as a parameter and returns a Promise
// that resolves to either an error object or null.
export class ValidateUserNameDirective implements Validator {
  constructor(private customValidator: CustomvalidationService) {}
  // The validate method takes an AbstractControl as a parameter and returns a validation error object or null.
  // The method calls the userNameValidator method from the CustomvalidationService
  validate(
    control: AbstractControl
  ): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return this.customValidator
      .userNameValidator(control)
      .then((result) => result || {});
  }
}
