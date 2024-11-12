import { Component, Input } from '@angular/core';
import { RegistrationData } from '../registrationform/registrationdata';

@Component({
  selector: 'rw-participantdata',
  templateUrl: './participantdata.component.html',
  styleUrls: ['./participantdata.component.scss']
})
export class ParticipantdataComponent {

  @Input() registrationData: RegistrationData[] = [];

}
