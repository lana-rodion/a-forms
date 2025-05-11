import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ZipcodeService } from '../../services/zipcode.service';
import { ZipcodeValidator } from './zipcode-validator';

@Component({
  selector: 'app-async-validator-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './async-validator-form.component.html',
  styleUrl: './async-validator-form.component.scss',
})
export class AsyncValidatorFormComponent implements OnInit {
  address!: FormGroup;
  zipcodeSyncValidators = [
    // Add your synchronous validators here
    Validators.required,
    Validators.pattern('\\d{5}'), // 5 digit zip code
  ];
  submitted = false;

  constructor(private zipcodeService: ZipcodeService) {}

  ngOnInit(): void {
    // Initialization logic here
    this.address = new FormGroup({
      zipcode: new FormControl(
        '',
        this.zipcodeSyncValidators,
        ZipcodeValidator.createValidator(this.zipcodeService)
      ),
    });
  }

  onSubmit() {
    if (this.address.invalid) {
      this.submitted = false;
      return;
    }
    if (this.address.valid) {
      alert(
        'Form Submitted succesfully!!!\nCheck the values in browser console.'
      );
      console.log('User Register Form: ', this.address.value);
      // Reset the form after submission
      this.address.reset();
    }
  }
}
