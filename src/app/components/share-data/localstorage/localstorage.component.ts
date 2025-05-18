import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTemplateComponent } from '../../../shared/page-template/page-template.component';

@Component({
  selector: 'app-localstorage',
  imports: [RouterLink, PageTemplateComponent],
  templateUrl: './localstorage.component.html',
  styleUrl: './localstorage.component.scss',
})
export class LocalstorageComponent {
  titleHeader: string = 'Browser Storage for Persistent Data Sharing';
}
