import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../shared/page-template/page-template.component';

@Component({
  selector: 'app-home',
  imports: [PageTemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  titleHeader: string = 'Home';
}
