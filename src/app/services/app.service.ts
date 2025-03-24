import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    //loading$ = new BehaviorSubject<boolean>(false);
    private loading = signal(false);

    constructor() { }

    // loading
    getValueLoading() {
        //return this.loading$.asObservable();
        return this.loading;
    }

    activateLoading() {
        //this.loading$.next(true);
        //return this.loading.update(x => true);
        return this.loading.set(true);
    }

    disableLoading() {
        //this.loading$.next(false);
        //return this.loading.update(x => false);
        return this.loading.set(false);
    }
}
