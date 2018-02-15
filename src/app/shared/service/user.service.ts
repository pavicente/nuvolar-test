import { Injectable } from '@angular/core';
import { IUserService } from './i.user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import { Repos } from '../models/repos.model';

@Injectable()
export class UserService implements IUserService {

    private baseUrl = 'https://api.github.com';

    private usersUrl = '/users';

    private followersUrl = '/followers';

    private reposUrl = '/repos';

    constructor(
        private http: Http,
    ) { }

    /**
     * @description Gets the list of all users from the server
     * @returns {Observable<User[]>}
     * @memberof UserService
     */
    public obtainUsers(): Observable<User[]> {
        return this.http.get(this.baseUrl + this.usersUrl)
        .map((res: Response) => <User[]>res.json());
    }

    /**
     * @description Gets one user from the server
     * @param {string} login
     * @returns {Observable<User>}
     * @memberof UserService
     */
    public obtainSingleUser(login: string): Observable<User> {
        return this.http.get(this.baseUrl + this.usersUrl + '/' + login)
            .map((res: Response) => <User>res.json());
    }

    /**
     * @description Gets the list of all followers from one user
     * @param {string} login
     * @returns {Observable<User[]>}
     * @memberof UserService
     */
    public obtainFollowers(login: string): Observable<User[]> {
        return this.http.get(this.baseUrl + this.usersUrl + '/' + login + this.followersUrl)
            .map((res: Response) => <User[]>res.json());
    }

    public obtainRepos(login: string): Observable<Repos[]> {
        return this.http.get(this.baseUrl + this.usersUrl + '/' + login + this.reposUrl)
            .map((res: Response) => res.json());
    }
}
