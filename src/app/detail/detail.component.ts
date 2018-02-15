import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/service/user.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Repos } from '../shared/models/repos.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    activeUser: User;

    followerList: User[];

    reposList: Repos[];

    login: string;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {

        // const login$ = this.route.paramMap.switchMap((params: ParamMap) =>
        //     this.userService.obtainSingleUser(params.get('login')));

        // login$.subscribe((user: User) => this.activeUser = user);
        // login$.

        this.route.paramMap.switchMap((params: ParamMap) =>
                this.userService.obtainSingleUser(params.get('login')))
            .subscribe((user: User) => this.activeUser = user);

        this.route.paramMap.switchMap((params: ParamMap) =>
                this.userService.obtainFollowers(params.get('login')))
            .subscribe((obtainedFollowerList: User[]) => this.followerList = obtainedFollowerList);

        this.route.paramMap.switchMap((params: ParamMap) =>
                this.userService.obtainRepos(params.get('login')))
            .subscribe((obtainedReposList: Repos[]) => this.reposList = obtainedReposList);
    }

    public goBack() {
        this.router.navigate(['/search']);
    }

}
