import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiHandler {

    constructor(private _httpClient: HttpClient) { }

    post(url: string, data: any): Observable<any> {
        return this._httpClient.post(environment.endpoint + url, data);
    }

    put(url: string, data: any): Observable<any> {
        return this._httpClient.put(environment.endpoint + url, data);
    }

    get(url: string, id: string): Observable<any> {
        return this._httpClient.get(environment.endpoint + url + '/' + id);
    }

    getAll(url: string): Observable<any> {
        return this._httpClient.get(environment.endpoint + url);
    }
}
