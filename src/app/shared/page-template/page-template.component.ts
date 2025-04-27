import { Component, Input } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrl: './page-template.component.scss',
  imports: [FooterComponent],
})
export class PageTemplateComponent {
  @Input() titleHeader: string | undefined;
}
