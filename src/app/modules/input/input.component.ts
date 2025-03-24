import { Component, computed, EventEmitter, input, Input, InputSignal, Output } from '@angular/core';

@Component({
    selector: 'app-input',
    imports: [],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
})
export class InputComponent {
    valor = input.required<number>();
    //valor = input<number>(0);
    valorMultiplicado = computed(() => this.valor() * 2);
    @Output() cambioValor = new EventEmitter<string>();
    

    constructor() {}
    

    bntActualizarValor() {
        this.cambioValor.emit('Cambio detectado en el componente hijo: ' + this.valor());
    }

    
}
