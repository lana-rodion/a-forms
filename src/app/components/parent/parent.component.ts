import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { PageTemplateComponent } from '../../shared/page-template/page-template.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, RouterLink, ChildComponent, PageTemplateComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  titleHeader: string = 'Parent to Child & Child to Parent';
  parentData1Requiered: string = 'Parent Data1 Requiered';
  parentData2: string = 'Parent Data 2';
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
