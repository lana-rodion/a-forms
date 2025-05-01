import { Component } from '@angular/core';
import { PageTemplateComponent } from '../../shared/page-template/page-template.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule, PageTemplateComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  titleHeader: string = 'Angular Forms';
  tab: string = 'tdforms';
}
