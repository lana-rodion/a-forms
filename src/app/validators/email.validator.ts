import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

/**
 * 1. AbstractControl: It provides some of the shared behavior that all controls
 *    and groups of controls have, like running validators, calculating status, and resetting state.
 *    It also defines the properties that are shared between all sub-classes,
 *    like value, valid, and dirty. It shouldn't be instantiated directly.
 * 2. ValidationErrors: It is an object that contains the validation errors
 *    for a control. The keys are the names of the validators that failed,
 *    and the values are the error messages or data associated with those validators.
 * 3. ValidatorFn: It is a function that takes an AbstractControl as an argument
 *    and synchronously returns either null if the control is valid, or a ValidationErrors object
 *    if the control is invalid. It is used to create custom validators for form controls.
 * 4. Validators: It is a collection of built-in validators provided by Angular.
 *    It includes validators for required fields, min/max length, pattern matching, etc.
 *    It can be used to create simple validators for form controls.
 * 5. FormControl: It is a class that represents a single form control in Angular.
 *    It is used to track the value and validation status of a form control.
 *    It can be used to create reactive forms in Angular.
 * 6. FormGroup: It is a class that represents a group of form controls in Angular.
 *    It is used to track the value and validation status of a group of form controls.
 *    It can be used to create nested forms in Angular.
 * 7. FormArray: It is a class that represents an array of form controls in Angular.
 *    It is used to track the value and validation status of an array of form controls.
 *    It can be used to create dynamic forms in Angular.
 * 8. FormBuilder: It is a service that provides helper methods to create form controls,
 *    form groups, and form arrays in Angular. It simplifies the process of creating reactive forms.
 * 9. FormControlName: It is a directive that binds a FormControl to a form control element in the template.
 *    It is used to create reactive forms in Angular.
 * 10. FormGroupName: It is a directive that binds a FormGroup to a form group element in the template.
 *     It is used to create nested forms in Angular.
 * 11. FormArrayName: It is a directive that binds a FormArray to a form array element in the template.
 *     It is used to create dynamic forms in Angular.
 * 12. ReactiveFormsModule: It is an Angular module that provides support for reactive forms.
 *     It includes the FormControl, FormGroup, FormArray, and other classes and directives
 *     needed to create reactive forms in Angular.
 */
export const emailValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const email = control.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  /**
   * const emailRegEx = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
   */

  if (
    Validators.required(control) !== null &&
    Validators.required(control) !== undefined
  ) {
    return null; // If the field is required, don't validate the email pattern
    // null means that no error occurred and it is valid!
  }
  return email && !emailRegex.test(email) ? { invalidEmail: true } : null;
};

/**
 * USING THE VALIDATOR
 * import { email } from '../../validators/email.validator.ts';
 *
 * const userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('', email)
  })
 */
