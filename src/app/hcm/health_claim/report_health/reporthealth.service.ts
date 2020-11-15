import { Observable, throwError } from 'rxjs';
import { IHealth } from './../ihealth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReporthealthService {

  private _url: string = "http://desktop-2mqf1ki:8000/api/healthy_claim/healthy_claim/read";
  constructor(private http: HttpClient) { }

  getReportHealth(): Observable<IHealth[]> {
    return this.http.get<IHealth[]>(this._url)
      .pipe(
        retry(1),
        catchError(this.cekError)
            )

    }

    cekError(error) {
        let pesanError = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            pesanError = `Error: ${error.error.message}`;
        } else {
            // server-side error
            pesanError = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        // window.alert(pesanError);
        return throwError(pesanError);
    }
}
