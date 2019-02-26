import {Injectable} from '@angular/core';
import {Note} from '../models/note';
import {Observable, of} from 'rxjs';
import {NotificationService} from './notification.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private baseUrl = 'http://localhost:8888';
  authToken = 'Basic ' + btoa('ivan:ivan');

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.authToken
    })
  };

  constructor(private notificationService: NotificationService,
              private http: HttpClient,) {
  }

  getNotes(): Observable<Note[]> {
    this.notificationService.add('Fetched notes');
    return this.http.get<Note[]>('http://localhost:8888/note', this.httpOptions)
      .pipe(
        catchError(this.handleError('get notes', []))
      );
  }

  getNote(id: number): Observable<Note> {
    let headers_object = new HttpHeaders();
    this.notificationService.add(`HeroService: fetched note id=${id}`);
    const url = `${this.baseUrl}/note/${id}`;
    return this.http.get<Note>(url).pipe(
      catchError(this.handleError<Note>(`getNote id=${id}`))
    );
  }

  addEmptyNote(): Observable<Note> {
    return this.http.post<Note>('http://localhost:8888/note', new Note(), this.httpOptions);
  }

  removeNote(id: number): Observable<Note> {
    const url = `${this.baseUrl}/note/${id}`;
    return this.http.delete<Note>(url, this.httpOptions);
  }

  updateNote(note: Note): Observable<Note> {
    const url = `${this.baseUrl}/note/${note.id}`;
    return this.http.put<Note>(url, note, this.httpOptions);
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
