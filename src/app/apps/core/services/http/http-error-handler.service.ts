import { Injectable } from '@angular/core';
import {MessageHttpService} from './message-http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {of} from 'rxjs/internal/observable/of';

export type HandleError =
    <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(private messageService: MessageHttpService) { }

    createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

    handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

        return (error: HttpErrorResponse): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            //console.log('sss');
            if(error!=null) {
                console.error(error);
            } // log to console instead

            const message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                `server returned code ${error.status} with body "${error.error}"`;

            // TODO: better job of transforming error for user consumption
            this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);

            // Let the app keep running by returning a safe result.
            return of( result );
        };

    }
}
