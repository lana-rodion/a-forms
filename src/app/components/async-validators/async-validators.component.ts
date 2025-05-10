import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { FruitService } from '../../services/fruit.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-validators',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [FruitService],
  templateUrl: './async-validators.component.html',
  styleUrl: './async-validators.component.scss',
})
export class AsyncValidatorsComponent {
  fruitForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private fruitService: FruitService
  ) {
    this.fruitForm = formBuilder.group({
      fruit: [
        '',
        [Validators.required, Validators.minLength(4)],
        (control: AbstractControl): Observable<ValidationErrors | null> =>
          this.checkFruitIsApproved$(control),
      ],
    });
  }

  public checkFruitIsApproved$(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    return this.fruitService.fruitIsApproved$(control.value).pipe(
      map((response) => {
        if (response) {
          return null;
        } else {
          return {
            checkFruitIsApproved: 'The fruit is not an approved fruit!',
          } as ValidationErrors;
        }
      })
    );
  }
}
