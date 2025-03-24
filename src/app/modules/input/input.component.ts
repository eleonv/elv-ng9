import { Component, EventEmitter, Input, InputSignal, Output } from '@angular/core';

@Component({
    selector: 'app-input',
    imports: [],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
})
export class InputComponent {
    @Input() mensajeSS!: string;
    @Input() mensaje!: InputSignal<string>;
    @Output() cambioContador = new EventEmitter<string>();

    constructor() {
        //this.mensaje = new InputSignal<string>();
    }
    
    cambiarMensajeSS() {
        this.mensajeSS = "nuevo mensaje SS";
        this.cambioContador.emit(this.mensajeSS);
    }
}
