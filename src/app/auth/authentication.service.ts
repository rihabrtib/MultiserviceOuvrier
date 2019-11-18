import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';




export class User {
  constructor(
    public status: String,
     ) {}
}

export class JwtResponse {
  constructor(
    public jwttoken: string,
     ) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private httpClient: HttpClient) { }

  authenticate(email, password) {
    return this.httpClient.post<any>('http://localhost:9090/user/login', {email, password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('email', email);
        let tokenStr = 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )
    );
  }

isUserLoggedIn() {
  let user = sessionStorage.getItem('email')
  return !(user === null)
}

logOut() {
  sessionStorage.removeItem('email')
  sessionStorage.removeItem('token')
}
}
