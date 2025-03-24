import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppService } from './services/app.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, MatProgressBarModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    private appService = inject(AppService);

    title = 'elv-ng19';

    loading = this.appService.getValueLoading();

    /*constructor() {
        console.log();

    }*/
}
