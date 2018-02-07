import { Injectable } from '@angular/core';
import { RequestOptions, Response, Headers, Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
    baseUrl = 'http://localhost:5000/api/auth/';
    userToken: any;
    decodedToken: any;
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http: Http) { }

    login(model: any) {
        return this.http.post(this.baseUrl + 'login', model, this.requestOptions()).map((response: Response) => {
            const user = response.json();
            if (user) {
                localStorage.setItem('token', user.tokenString);
                this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
                console.log(this.decodedToken);
                this.userToken = user.tokenString;
            }
        }).catch(this.handleError);
    }

    loggedIn() {
        return tokenNotExpired();
    }

    register(model: any) {
        return this.http
            .post(this.baseUrl + 'register', model, this.requestOptions())
            .catch(this.handleError);
    }

    private requestOptions() {
        const headers = new Headers({'Content-type': 'application/json'});
        return new RequestOptions({headers: headers});
    }

    private handleError(error: any) {
        const applicationError = error.headers.get('Application-Error');
        if (applicationError) {
            return Observable.throw(applicationError);
        }
        const serverError = error.json();
        let modelStatusErrors = '';
        if (serverError) {
            for (const key in serverError) {
                if (serverError[key]) {
                    modelStatusErrors += serverError[key] + '\n';
                }
            }
        }

        return Observable.throw(modelStatusErrors || 'Server error');
    }
}
