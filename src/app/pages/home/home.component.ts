import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../shared/page-template/page-template.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule, PageTemplateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  titleHeader: string = 'Home';
  tab: number = 1;
}
