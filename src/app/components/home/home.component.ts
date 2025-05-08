import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../shared/page-template/page-template.component';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from '../template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { TdformValidationComponent } from '../tdform-validation/tdform-validation.component';
import { AsyncValidatorsComponent } from '../async-validators/async-validators.component';
@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    PageTemplateComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    TdformValidationComponent,
    AsyncValidatorsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  titleHeader: string = 'Angular Forms';
  tab: string = 'asyncValidators';
}
