import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../models/result';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;
  isAuth = false;
  userSubject = new Subject<User>();
  userId: string;
  token = "";
  _isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  emitUsers(): void {
    this.userSubject.next(this.user);
  }

  authentifier(newUser: User) {
    const url = `${environment.api}` + 'users/login';
    const body = {
      "email": newUser.email,
      "password": newUser.password
    };
    return new Promise(
      (resolve, reject) => {
        this.http.post(url, body).subscribe(
          (data: Result) => {
            if (data.status == 200) {
              console.log(data);
              this.user = data.args;
              this.isAuth = true;
              this._isAuth$.next(true);
              this.token = data.token
              console.log('token :' + this.token);

              resolve(data.result);
            } else {
              console.log(data);
              reject(data.message);
            }
          },
          (error) => {
            console.log(error);
            reject(error);
          }
        )
      });
  };


  createUser(newUser: User) {
    return new Promise(
      (resolve, reject) => {

        const url = `${environment.api}` + 'users/register'
        const body = {
          "firstname": newUser.firstname,
          "lastname": newUser.lastname,
          "username": newUser.username,
          "email": newUser.email,
          "password": newUser.password,
        };
        this.http.post(url, body).subscribe(
          (data: Result) => {
            console.log(data);
            if (data.status == 200) {
              console.log(data);
              this.user = data.args;
              this.isAuth = true;

              this.emitUsers();
              resolve(data.result);
            } else {
              reject(data.message);
            }
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }


  getParams() {
    const params = {
      isAuth: this.isAuth,
    }
    return params;
  }

  logOut(): void {
    this.user = null;
    this.isAuth = false;
    this.userSubject = new Subject<User>();
  }
}