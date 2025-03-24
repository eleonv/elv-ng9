import { Component, signal, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    InputComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    mensaje = 'Hola desde el padre abv';



    constructor() {
        //this.mensaje = new InputSignal<string>('Initial message'); // Initialize with an appropriate value
        //@Input({ required: true }) mensaje!: InputSignal<string>;
      }
}
