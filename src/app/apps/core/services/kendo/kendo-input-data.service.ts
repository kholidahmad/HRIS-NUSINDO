import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {toODataString} from '@progress/kendo-data-query';
import {map, tap} from 'rxjs/operators';
import {Md5} from 'ts-md5';

@Injectable({
    providedIn: 'root'
})
export abstract class KendoInputDataService extends BehaviorSubject<any> {
    public loading: boolean;

    //private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';
    //public http: HttpClient;

    /*queryStr = `$filter=contains(CategoryName,'${filter}')&$skip=0&$count=true`;*/
    constructor(public http: HttpClient) {
        super(null);
    }

    public query(URL: string, state: any): void {
        this.fetch(URL, state)
            .subscribe(x => super.next(x));
    }

    public fetch(url: string, filterString: string): Observable<any> {

        //console.log(state);
        const queryStr = `${filterString}&$count=true`;
        this.loading = true;

        let header = new HttpHeaders();

        let option = {
            headers: header.append('Content-Type', 'application/json')
                .append('Authorization','Bearer '+localStorage.getItem('token'))
        };

        const httpOptions = {
            headers: new HttpHeaders().set('Authorization','Bearer '+localStorage.getItem('token'))
            /*'Authorization': 'Bearer '+localStorage.getItem('token')
        })*/
        };

        //console.log("sdsdf"+option.headers.get('Authorization'), httpOptions);

        return this.http
            .get(`${url}?${queryStr}`)
            .pipe(
                map(response => response['value']),
                tap(() => this.loading = false)
            );
    }

}

