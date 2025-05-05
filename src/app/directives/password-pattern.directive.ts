import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appPasswordPattern]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordPatternDirective,
      multi: true,
    },
  ],
})
export class PasswordPatternDirective implements Validator {
  constructor(private customValidator: CustomvalidationService) {}
  // The validate method is called by Angular to validate the form control.
  // It takes an AbstractControl as a parameter and returns a validation error object or null.
  // The method calls the patternValidator method from the CustomvalidationService
  // to validate the control value against the regex pattern.
  // If the control value is valid, it returns null; otherwise, it returns an error object.
  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.customValidator.patternValidator()(control);
  }
}
