import { Component } from '@angular/core';
import { RegistrationData } from './registrationform/registrationdata';

@Component({
  selector: 'rw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'RegistrationWebsite';
  registrationData: RegistrationData[] = [];
}
