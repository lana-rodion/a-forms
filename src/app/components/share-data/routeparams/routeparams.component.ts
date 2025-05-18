import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../../shared/page-template/page-template.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-routeparams',
  imports: [RouterLink, PageTemplateComponent],
  templateUrl: './routeparams.component.html',
  styleUrl: './routeparams.component.scss',
})
export class RouteparamsComponent {
  titleHeader: string =
    'How to pass data between components using routes in Angular?';
}
