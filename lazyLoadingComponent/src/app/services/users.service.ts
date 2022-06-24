import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 users$
  constructor( private api: ApiService) {
    this.users$= this.api.get<IUser[]>('users')
  }

 getUser(id$: Observable<string|null>): Observable<IUser|undefined> {
  return this.users$.pipe(
    switchMap(users =>id$.pipe(
      map(
        id => users.find(user => user.id ==id)
        ))
        ));
 }
}
