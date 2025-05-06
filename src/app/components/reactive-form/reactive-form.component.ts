import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomvalidationService } from '../../services/customvalidation.service';
import { MatchPasswordDirective } from '../../directives/match-password.directive';
import { PasswordPatternDirective } from '../../directives/password-pattern.directive';
import { UsernameValidationService } from '../../services/username-validation.service';

@Component({
  selector: 'app-reactive-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatchPasswordDirective,
    PasswordPatternDirective,
    ModalComponent,
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  submitted = false;
  titleModal = 'Reactive Register Form Modal';
  @ViewChild('modal', { static: false }) modal!: ModalComponent;

  constructor(
    private customValidator: CustomvalidationService,
    private userNameValidationService: UsernameValidationService
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', {
        asyncValidators: [
          this.userNameValidationService.validate.bind(
            this.userNameValidationService
          ),
        ],
        validators: [Validators.required],
      }),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.patternValidator(),
        ])
      ),
      confirmPassword: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          this.customValidator.matchPassword('password', 'confirmPassword'),
        ])
      ),
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    if (this.registerForm.valid) {
      alert(
        'Form Submitted succesfully!!!\n Check the values in browser console.'
      );
      console.log('User Register Form: ', this.registerForm.value);
    }
    this.modal.close();
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
