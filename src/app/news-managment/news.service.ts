import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {News} from '../models/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }


  getNews(): Observable<News[]> {
    return this.http.get<News[]>('http://localhost:8888/news')
  }

}
