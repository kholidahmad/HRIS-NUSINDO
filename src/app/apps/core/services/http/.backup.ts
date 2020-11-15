import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {HandleError, HttpErrorHandlerService} from './http-error-handler.service';
import {Observable} from 'rxjs/Rx';
import {catchError} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private handleError: HandleError;
   private headers: HttpHeaders= new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': localStorage.getItem('token')
    });
  constructor(
      private http: HttpClient,
      private httpErrorHandler: HttpErrorHandlerService) { }

  set_handle_error(ServiceName: string) {
      this.handleError = this.httpErrorHandler.createHandleError(ServiceName)
  }

  public get(url: string,params: any, name: string): Observable<{}> {

      this.set_handle_error(name);
      let par = new HttpParams().set('param',params);

      let options = {
        headers: this.headers,
        params: par
      };
      return this.http.get<{}>(url,options)
          .pipe(
              catchError(this.handleError(name, []))
          );
  }
  post(url: string,params: any, name: string): Observable<{}> {
      this.set_handle_error(name);
      let options = {
          headers: this.headers
      };
        return this.http.post<{}>(url,params,options)
            .pipe(
                catchError(this.handleError(name, []))
            );
  }
}
