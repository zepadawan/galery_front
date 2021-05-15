import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = environment.api;
  token: string;
  userId: string;
  isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  // create user
  signup(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.api + 'users/signup', { email: email, password: password }).subscribe(
        (signUpData: { status: number, message: string }) => {
          if (signUpData.status == 201) {
            // authentifier l'utilisateur
            this.signin(email, password)
              .then(() => {
                resolve(true);
              })
              .catch((err) => {
                reject(err)
              });
          } else {
            reject(signUpData.message);
          }
        },
        (err) => {
          reject(err);
        }
      )

    })
  };

  signin(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.api + 'users/login', { email: email, password: password }).subscribe(
        (authData: { token: string, userId: string }) => {
          this.userId = authData.userId;
          this.token = authData.token;
          this.isAuth$.next(true);
          resolve(true);
        },
        (err) => {
          reject(err);
        }
      )
    });
  };

}
