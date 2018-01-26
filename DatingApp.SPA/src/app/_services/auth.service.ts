import { Injectable } from '@angular/core';
import { RequestOptions, Response, Headers, Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth/';
    userToken: any;

    constructor(private http: Http) { }

    login(model: any) {
        const headers = new Headers({'Content-type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        return this.http.post(this.baseUrl + 'login', model, options).map((response: Response) => {
            const user = response.json();
            if (user) {
                localStorage.setItem('token', user.tokenString);
                this.userToken = user.tokenString;
            }
        });
    }
}
