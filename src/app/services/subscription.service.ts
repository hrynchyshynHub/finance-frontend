import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JourneySubscription} from '../models/journeySubscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private baseUrl = 'http://localhost:8888/journey';
  private searchUrl = 'http://localhost:8888/journey/search';
  //?term=льв

  constructor(private http: HttpClient) { }

  getSubscription(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createJourneySubscription(journeySubscription: JourneySubscription): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, journeySubscription);
  }

  updateJourneySubscription(id: number, value: JourneySubscription): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteJourneySubscription(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getJourneySubscription(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  findStationByTerm(term: string): Observable<any>{
    let params = new HttpParams();
    params = params.append('term', term);
    return this.http.get(`${this.searchUrl}`, {params: params})
  }


}
