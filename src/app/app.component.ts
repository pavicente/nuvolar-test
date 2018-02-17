import { Component, HostBinding } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    @HostBinding('class') appRootClass = 'light-theme';

    public onChangeTheme(theme: string) {
        this.appRootClass = theme;
    }
}
