import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Custom validator to check if a control's value is a number.
 * @param control - The control to validate.
 * @returns ValidationErrors or null
 */
export function NumberValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;
  // Check if the value is a number
  if (value !== null && value !== undefined && isNaN(value)) {
    return { notANumber: true, requieredValue: 10 }; // Return an error object if not a number
  }

  // Check if the value is less than 10
  if (value < 10) {
    return { lessThanTen: true }; // Return an error object if less than 10
  }
  return null; // Return null if valid
}
