import { Component, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatchPasswordDirective } from '../../directives/match-password.directive';
import { PasswordPatternDirective } from '../../directives/password-pattern.directive';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-tdform-validation',
  imports: [
    CommonModule,
    FormsModule,
    MatchPasswordDirective,
    PasswordPatternDirective,
    ModalComponent,
  ],
  templateUrl: './tdform-validation.component.html',
  styleUrl: './tdform-validation.component.scss',
})
export class TdformValidationComponent {
  userModal = new User();
  titleModal = 'Custom Template-Driven Form Validation';
  @ViewChild('modal', { static: false }) modal!: ModalComponent;

  constructor() {}

  onSubmit() {
    confirm(
      'Form Submitted succesfully!!!\n Check the values in browser console.'
    );
    console.table(this.userModal);
  }
}
