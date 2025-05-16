import { Component } from '@angular/core';
import { CommunicationService } from '../../../services/communication.service';

@Component({
  selector: 'app-sender',
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.scss',
})
export class SenderComponent {
  constructor(private commService: CommunicationService) {}
  senderMessage: string = 'New Data from Sender!';

  publishUpdate() {
    this.commService.transmitData(this.senderMessage);
  }
}
