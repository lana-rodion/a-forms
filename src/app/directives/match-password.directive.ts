import { Directive, Input } from '@angular/core';
import {
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appMatchPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordDirective,
      multi: true,
    },
  ],
})
export class MatchPasswordDirective implements Validator {
  @Input('appMatchPassword') matchPassword: string[] = [];
  constructor(private customValidator: CustomvalidationService) {}
  // The validate method is called by Angular to validate the form control.
  // It takes an AbstractControl as a parameter and returns a validation error object or null.
  // The method calls the matchPassword method from the CustomvalidationService
  // to validate the control value against the regex pattern.
  validate(formGroup: FormGroup): ValidationErrors | null {
    return this.customValidator.matchPassword(
      this.matchPassword[0],
      this.matchPassword[1]
    )(formGroup);
  }
}
