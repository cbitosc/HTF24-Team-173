import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile-pg',
  standalone: true,
  imports: [ StepperModule,ButtonModule, InputTextModule, FormsModule ],
  templateUrl: './profile-pg.component.html',
  styleUrl: './profile-pg.component.scss'
})
export class ProfilePgComponent {
  firstName= '';
  lastName= '';
  constructor() {
    firstName: '';
    lastName: '';
  }
}
