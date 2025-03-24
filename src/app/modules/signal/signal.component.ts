import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-signal',
    imports: [],
    templateUrl: './signal.component.html',
    styleUrl: './signal.component.scss'
})
export class SignalComponent {
    private appService = inject(AppService);

    activarLoading() {
        console.log('Activar loading');
        this.appService.activateLoading();
    }

    desactivarLoading() {
        console.log('Desactivar loading');
        this.appService.disableLoading();
    }
}
