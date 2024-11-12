import { Component, Input, Output, EventEmitter} from '@angular/core';
import { RegistrationData } from './registrationdata';

@Component({
  selector: 'rw-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent {
  selectedMajor: string | undefined;

  @Input() registrationData: RegistrationData[] = [];
  @Output() registrationDataChange = new EventEmitter<RegistrationData[]>();
  
  participantId= 0;
  participantSeatNumber= 0;

  participantName= '';
  participantStudentId= '';
  participantEmail= '';
  participantTelephoneNumber= '';
  participantLineId= '';
  participantFaculty= '';
  participantMajor= '';
  participantClassYear= '';

  btnClicked(){
    if (
      this.participantName==='' 
      && this.participantEmail==='' 
      && this.participantTelephoneNumber==='' 
      && this.participantLineId==='' 
      && this.participantFaculty==='' 
      && this.participantMajor===''
      && this.participantClassYear===''
    ) {
        alert('Please Fill Out The Form.');
      } else {
          this.participantId++;
          this.participantSeatNumber++;

          const newParticipant = new RegistrationData(
            this.participantId,
            this.participantName,
            this.participantStudentId,
            this.participantEmail,
            this.participantTelephoneNumber,
            this.participantLineId,
            this.participantFaculty,
            this.participantMajor,
            this.participantClassYear,
            this.participantSeatNumber
          );

          this.registrationData.push(newParticipant);
          this.registrationDataChange.emit(this.registrationData);

          this.participantName= '';
          this.participantStudentId= '';
          this.participantEmail= '';
          this.participantTelephoneNumber= '';
          this.participantLineId= '';
          this.participantFaculty= '';
          this.participantMajor= '';
          this.participantClassYear= '';
      }
  }
}
