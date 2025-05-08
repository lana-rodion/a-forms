import { FormControl } from '@angular/forms';

export interface UserRegistration {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}
/* export class UserRegistration {
  public name?: string;
  public email?: string;
  public username?: string;
  public password?: string;
  public confirmPassword?: string;
} */
