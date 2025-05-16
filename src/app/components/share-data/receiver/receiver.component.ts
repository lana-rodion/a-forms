import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTemplateComponent } from '../../../shared/page-template/page-template.component';

@Component({
  selector: 'app-receiver',
  imports: [CommonModule, RouterLink, PageTemplateComponent],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss',
})
export class ReceiverComponent {
  titleHeader: string =
    'Sibling Communication Using a Shared Service with BehaviorSubject';
}
