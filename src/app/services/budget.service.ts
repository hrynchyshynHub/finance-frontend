import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {NotificationService} from './notification.service';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Budget} from '../models/budget';
import {Note} from '../models/note';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private notificationService: NotificationService,
              private http: HttpClient,) {
  }

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>('http://localhost:8888/budget')
      .pipe(
        catchError(this.handleError('get notes', []))
      );
  }

  createBudget(budget: Budget):Observable<Budget>{
    return this.http.post<Budget>('http://localhost:8888/budget', budget);
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
