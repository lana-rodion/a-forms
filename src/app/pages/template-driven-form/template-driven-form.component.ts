import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageTemplateComponent } from '../../shared/page-template/page-template.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  imports: [PageTemplateComponent, RouterLink, RouterLinkActive],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  titleTemplate: string = 'Template-driven form';
}
