import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  // decorate the property with required metadata
  @Input({ required: true }) childData1!: string;
  @Input() childData2: string = '';
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  // The addNewItem method emits an event with a string value when called.
  // This event can be listened to by the parent component to perform some action.
}
