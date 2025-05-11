import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ZipcodeService } from '../../services/zipcode.service';
import { ZipcodeValidator } from '../../validators/zipcode-validator';
import { UserService } from '../../services/user.service';
import { UsernameValidator } from '../../validators/username.validator';

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
    Validators.maxLength(5),
  ];

  registrationForm!: FormGroup;
  submitted = false;

  constructor(
    private zipcodeService: ZipcodeService,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Initialization logic here
    this.address = new FormGroup({
      zipcode: new FormControl(
        '',
        this.zipcodeSyncValidators,
        ZipcodeValidator.createValidator(this.zipcodeService)
      ),
    });

    this.registrationForm = this.fb.group({
      username: [
        '',
        [Validators.minLength(3), Validators.required],
        [UsernameValidator.createValidator(this.userService)],
      ],
    });
  }

  onSubmitForm(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    alert(
      'Form Submitted succesfully!!!\nCheck the values in browser console.'
    );
    console.log('User Register Form: ', form.value);
    this.submitted = true;
    form.reset();
  }
}
