import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NumberValidator } from '../../validators/number.validator';

@Component({
  selector: 'app-custom-validation',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-validation.component.html',
  styleUrl: './custom-validation.component.scss',
})
export class CustomValidationComponent {
  formNumber = new FormGroup({
    numVal: new FormControl('', [NumberValidator]),
  });
  submitted = false;

  get numVal() {
    return this.formNumber.get('numVal');
  }

  onSubmit() {
    if (this.formNumber.invalid) {
      return;
    }
    confirm('Form submitted successfully! Check the console for values.');
    console.log('Form submitted successfully!', this.formNumber.value);
    this.submitted = true;
    this.formNumber.reset();
  }
}
