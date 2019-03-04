import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Transaction} from '../models/transaction';
import {Budget} from '../models/budget';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient,) {
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('http://localhost:8888/transaction')
      .pipe(
        catchError(this.handleError('get notes', []))
      );
  }

  getTransactionsForBudget(budget: Budget): Observable<Transaction[]>{
    return this.http.get<Transaction[]>('http://localhost:8888/budget' +budget.id + '/transactions')
      .pipe(
        catchError(this.handleError('get notes', []))
      );
  }

  createTransaction(transaction: Transaction):Observable<Transaction>{
    return this.http.post<Transaction>('http://localhost:8888/transaction', transaction);
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
