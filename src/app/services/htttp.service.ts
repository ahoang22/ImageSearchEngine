import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    readonly API_KEY = "16198690-b9df326797857b5b13377d586";
    readonly API_URL = "https://pixabay.com/api/";

    get(params: any) {
        let httpParams = new HttpParams().set('key', this.API_KEY);
        Object.keys(params).forEach(key => {
            httpParams = httpParams.append(key, params[key]);
        });
        return this.http.get(this.API_URL, { params: httpParams });
    }
}