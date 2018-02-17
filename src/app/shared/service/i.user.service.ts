import { User } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { Repos } from '../models/repos.model';
import { UserDetails } from '../models/user-details.model';

export abstract class IUserService {

    public abstract obtainUsers(q?: string): Observable<User[]>;

    public abstract obtainSingleUser(login: string): Observable<UserDetails>;

    public abstract obtainFollowers(login: string): Observable<User[]>;

    public abstract obtainRepos(login: string): Observable<Repos[]>;
}
