import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageTemplateComponent } from '../../shared/page-template/page-template.component';

@Component({
  selector: 'app-template-driven-form',
  imports: [PageTemplateComponent],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line if using Web Components
})
export class TemplateDrivenFormComponent {
  titleTemplate: string = 'Template-driven form';
}
