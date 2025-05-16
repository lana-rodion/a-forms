import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTemplateComponent } from '../../../shared/page-template/page-template.component';
import { CommunicationService } from '../../../services/communication.service';
import { SenderComponent } from '../sender/sender.component';

@Component({
  selector: 'app-receiver',
  imports: [CommonModule, RouterLink, PageTemplateComponent, SenderComponent],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss',
})
export class ReceiverComponent implements OnInit {
  titleHeader: string =
    'Sibling Communication Using a Shared Service with BehaviorSubject';
  receivedData: string = '';

  constructor(private commService: CommunicationService) {}

  ngOnInit() {
    this.commService.currentData$.subscribe((data) => {
      this.receivedData = data;
    });
  }
}
