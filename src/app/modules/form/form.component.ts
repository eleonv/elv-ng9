import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
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
