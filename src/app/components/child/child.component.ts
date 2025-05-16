import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  // decorate the property with required metadata
  @Input() childData1: string = '';
  @Input() childData2: string = '';
  @Output() newItemEvent = new EventEmitter<string>();
  newItem: string = '';
  invalid: boolean = true;

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  // The addNewItem method emits an event with a string value when called.
  // This event can be listened to by the parent component to perform some action.
  checkInputEmpty() {
    if (this.newItem.length == 0) {
      this.invalid = true;
    } else {
      this.invalid = false;
    }
  }
}
