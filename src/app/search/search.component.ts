import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { Subject } from 'rxjs/Subject';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { routerTransition } from '../_animations/animations';
import { IUserService } from '../shared/service/i.user.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [routerTransition],
})
export class SearchComponent implements OnInit {

    searchValue = '';

    subjSearchValue: Subject<string> = new Subject<string>();

    userList: User[];

    userList$: any;

    constructor(
        private userService: IUserService,
    ) { }

    ngOnInit() {
        // debounceTime to avoid spam
        // switchMap to ignore ongoing searches once a new one starts
        this.userList$ = this.subjSearchValue.asObservable().debounceTime(700).switchMap((val: string) =>
            this.userService.obtainUsers(this.searchValue)
        );

        // Subscribe to the created observable in order to update the shown list whenever it changes
        this.userList$.subscribe((userListRecieved: User[]) =>
            this.userList = userListRecieved
        );

        // Initial (empty) search
        this.triggerSearch(this.searchValue);
    }

    public triggerSearch(searchValue: string): void {
        // Trigger the subject update so we can get a new users list
        this.subjSearchValue.next(searchValue);
    }

}
