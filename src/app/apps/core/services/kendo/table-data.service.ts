import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {GridDataResult} from '@progress/kendo-angular-grid';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {toODataString} from '@progress/kendo-data-query';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TableDataService extends BehaviorSubject<GridDataResult> {
    public loading: boolean;

    //private BASE_URL = 'https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/';
    //public http: HttpClient;

    constructor(public http: HttpClient) {
        super(null);
    }

    public query(URL: string, state: any): void {
        this.fetch(URL, state)
            .subscribe(x => super.next(x));
    }

    public fetch(url: string, state: any): Observable<GridDataResult> {

        console.log(state);
        const queryStr = `${toODataString(state)}&$count=true`;
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
                map(response => (<GridDataResult>{
                    data: response['value'],
                    total: parseInt(response['count'], 10)
                })),
                tap(() => this.loading = false)
            );
    }

}
