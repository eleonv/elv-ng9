import { Component, Input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-input',
    imports: [],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
})
export class InputComponent {
    @Input() mensaje!: string;
    //@Input({ required: true }) mensaje!: InputSignal<string>;


    constructor() {
        //this.mensaje = new InputSignal<string>();
    }

}
