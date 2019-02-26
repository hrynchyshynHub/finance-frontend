import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Currency} from '../models/currency';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  authToken = 'Basic ' + btoa('ivan:ivan');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    })
  };

  constructor(private http: HttpClient) {
  }

  getCurrency(): Observable<Currency> {
    const url = 'http://localhost:8888/currency';

    return this.http.get<Currency>(url, this.httpOptions).pipe(
      catchError(this.handleError<Currency>(`getCurrency`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
