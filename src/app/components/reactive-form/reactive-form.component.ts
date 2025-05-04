import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule, ModalComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  titleModal = 'Reactive Form Modal';
  contentModal = 'This is the content of the modal.';
  footerModal = 'This is the footer of the modal.';
  @ViewChild('modal', { static: false }) modal!: ModalComponent;
}
