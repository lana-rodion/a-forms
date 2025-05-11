import { ZipcodeService } from '../services/zipcode.service';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map } from 'rxjs';

export class ZipcodeValidator {
  static createValidator(zipcodeService: ZipcodeService): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Observable<ValidationErrors | null>
      | Promise<ValidationErrors | null> => {
      return zipcodeService.validateZipCode(control.value).pipe(
        map((isValid) => {
          return isValid ? null : { invalidAsync: true };
        })
      );
    };
  }
}
