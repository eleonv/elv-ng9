import { Routes } from '@angular/router';
import { SignalComponent } from './modules/signal/signal.component';
import { FormComponent } from './modules/form/form.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'signal', component: SignalComponent},
    { path: 'form', component: FormComponent},
    { path: '', component: DashboardComponent},
];
