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
  constructor(
      private http: HttpClient,
      private httpErrorHandler: HttpErrorHandlerService) { }

  set_handle_error(ServiceName: string) {
      this.handleError = this.httpErrorHandler.createHandleError(ServiceName)
  }

  public set_aoptions(params: any) {
        /*for (let i=0; i<params;++){

        }*/
  }

  public get(url: string,params: any, name: string): Observable<{}> {

      this.set_handle_error(name);
      let par = new HttpParams().set('param',params);

      let token = localStorage.getItem('token');
      if(token==null) {
          token = "";
      }
      let headers = new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': token
      });
      //console.log(localStorage.getItem('token'));
      let options = {
        headers: headers,
        params: par
      };
      return this.http.get<{}>(url,options)
          .pipe(
              catchError(this.handleError(name, []))
          );
  }

  public set_object_to_params(object) {
        for (let i in object) {

        }
  }
  post(url: string,params: any, name: string): Observable<{}> {
      this.set_handle_error(name);
      let headers = new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': localStorage.getItem('token')
      });
      let options = {
          headers: headers
      };
        return this.http.post<{}>(url,params,options)
            .pipe(
                catchError(this.handleError(name, []))
            );
  }

    public getWOb(url: string,params: any, name: string) {

        this.set_handle_error(name);
        let headers = new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': localStorage.getItem('token')
        });
        let par = new HttpParams().set('param',params);

        let options = {
            headers: headers,
            params: par
        };
        return this.http.get<{}>(url,options)
            .pipe(
                catchError(this.handleError(name, []))
            );
    }
}
