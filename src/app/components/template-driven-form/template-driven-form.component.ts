import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  category?: '';
}
@Component({
  selector: 'app-template-driven-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent implements OnInit {
  titleTemplate: string = 'Template-driven form';
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    category: '',
  };

  public categoryList = [1, 2, 3];
  submitted: boolean = false;

  constructor() {}
  ngOnInit() {
    // Initialize the user object with default values
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      category: '',
    };
  }

  onSubmit(form: any) {
    if (form.invalid) {
      return;
    }
    // Simulate a form submission
    // In a real application, you would send the form data to a server
    // For this example, we'll just log the data to the console
    // and reset the form
    this.user = form.value;
    this.submitted = true;
    console.log(this.user);
    // Reset the form
    form.reset();
  }
}
