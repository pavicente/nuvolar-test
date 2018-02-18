import { Component, HostBinding } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { routerTransition } from './_animations/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [routerTransition]
})
export class AppComponent {

    @HostBinding('class') appRootClass = 'light-theme';
    @HostBinding('@routerTransition') routerTransition;

    public onChangeTheme(theme: string) {
        this.appRootClass = theme;
    }

    public getPage(outlet) {
        return outlet.activatedRouteData['page'] || 'search';
    }
}
