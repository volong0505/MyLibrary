import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LOGIN_API, LoginRequest, LoginReponse, GET_USER_API } from "@my-library/api-interfaces"
import { Observable } from "rxjs";

const headers = new HttpHeaders();
headers.append('Accept', 'application/json');

@Injectable()
export class AuthService {
    constructor(
        private readonly http: HttpClient
    ) {
    }
    
    login(params: LoginRequest): Observable<LoginReponse> {
        return this.http.post<LoginReponse>(LOGIN_API, { ...params}, {withCredentials: true})
    }

    getUser(): Observable<any> {
        return this.http.get(GET_USER_API, { withCredentials: true})
    }
}