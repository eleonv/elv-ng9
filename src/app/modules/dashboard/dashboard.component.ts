import { Component, signal, InputSignal, WritableSignal } from '@angular/core';
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
    //mensajeSS = 'Hola desde el padre abv sin signal';
    //mensaje = signal('Hola desde el padre');
    valorPadre = signal(10);

    mensajeRecibido: string = "";

    constructor() {
        //this.mensaje = new InputSignal<string>('Initial message'); // Initialize with an appropriate value
        //@Input({ required: true }) mensaje!: InputSignal<string>;
    }

    /*get mensajeParaHijo(): any {
        return this.mensaje.asReadonly();
    }

    cambiarMensaje() {
        this.mensaje.set("Nuevo mensaje");
    }

    actualizarContador($event: any) {
        //this.mensajeSS = $event;
        console.log($event);
        console.log("mensajeSS:", this.mensajeSS);
    }*/

    bntActualizarValor() {
        let nuevoValor = Math.random() * 10;
        this.valorPadre.set(nuevoValor);
    }

    onActualizar(mensaje: any) {
        this.mensajeRecibido = mensaje;
        console.log("Mensaje actualizado:", this.mensajeRecibido);
        
    }
}
