import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/service/user.service';
import { Subject } from 'rxjs/Subject';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { routerTransition } from '../_animations/animations';

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
        private userService: UserService,
    ) { }

    ngOnInit() {
        // debounceTime to avoid spam
        // switchMap to ignore ongoing searches once a new one starts
        this.userList$ = this.subjSearchValue.asObservable().debounceTime(700).switchMap((val: string) =>
            this.userService.obtainUsers()
        );

        this.userList$.subscribe((userListRecieved: User[]) =>
            this.userList = userListRecieved.filter((user: User) => {
                const pattern: RegExp = new RegExp(this.searchValue);
                return pattern.test(user.login);
            })
        );

        // Initial search
        this.triggerSearch(this.searchValue);
    }

    public triggerSearch(searchValue: string): void {
        this.subjSearchValue.next(searchValue);
    }

}
