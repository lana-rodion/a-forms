import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [CommonModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  parentData1Requiered: string = 'Parent Data1 Requiered';
  parentData2: string = 'Parent Data 2';
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
