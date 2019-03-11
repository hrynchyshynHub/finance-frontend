import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Currency} from '../models/currency';


@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient) {}

  getStatistic(): Observable<Currency[]> {
    return this.http.get<Currency[]>('http://localhost:8888/currency/stat')
  }
}
