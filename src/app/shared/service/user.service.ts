import { Injectable } from '@angular/core';
import { IUserService } from './i.user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { Response, Http } from '@angular/http';
import { Repos } from '../models/repos.model';
import { UserDetails } from '../models/user-details.model';

@Injectable()
export class UserService implements IUserService {

    private baseUrl = 'https://api.github.com';
    private usersUrl = '/users';
    private followersUrl = '/followers';
    private reposUrl = '/repos';
    private searchUrl = '/search';

    constructor(
        private http: Http,
    ) { }

    /**
     * @description Gets the list of all users from the server. Matches username if provided
     * @param {string} query
     * @returns {Observable<User[]>}
     * @memberof UserService
     */
    public obtainUsers(query?: string): Observable<User[]> {
        let url = '';
        // If a query is provided, search for users containing that value -> /search/users?q=toto
        if (query) {
            url = this.baseUrl + this.searchUrl + this.usersUrl + '?q=' + query;
            return this.http.get(url).map((res: Response) => <User[]>res.json().items);
        }
        // Basic search when no query is povided
        url = this.baseUrl + this.usersUrl;
        return this.http.get(url).map((res: Response) => <User[]>res.json());
    }

    /**
     * @description Gets the user whose username is provided -> /user/toto
     * @param {string} login
     * @returns {Observable<User>}
     * @memberof UserService
     */
    public obtainSingleUser(login: string): Observable<UserDetails> {
        return this.http.get(this.baseUrl + this.usersUrl + '/' + login)
            .map((res: Response) => <UserDetails>res.json());
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

    /**
     * @description Gets the list of repos from a particular user
     * @param {string} login
     * @returns {Observable<Repos[]>}
     * @memberof UserService
     */
    public obtainRepos(login: string): Observable<Repos[]> {
        return this.http.get(this.baseUrl + this.usersUrl + '/' + login + this.reposUrl)
            .map((res: Response) => res.json());
    }
}
