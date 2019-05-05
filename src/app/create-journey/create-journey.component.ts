import {JourneySubscription} from '../models/journeySubscription';
import {SubscriptionService} from '../services/subscription.service';
import {Router} from '@angular/router';
import {Station} from '../models/station';
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-create-journey',
  templateUrl: './create-journey.component.html',
  styleUrls: ['./create-journey.component.css']
})
export class CreateJourneyComponent implements OnInit {

  journey: JourneySubscription = new JourneySubscription(null, null, null);
  myControl = new FormControl();
  options: Station[];
  fromStation: Station;
  toStation: Station;
  date: string;


  constructor(private subscriptionService: SubscriptionService,  private router: Router) { }

  ngOnInit() {
  }

  setFromStation(station: Station){
    console.log('set from station');
    this.fromStation = station;
  }
  setToStation(station: Station){
    console.log('set to station');
    this.toStation = station;
  }
  setDate(date: string){
    console.log('set date');
    this.date = date;
  }

  save() {
    console.log('zvidku' + this.fromStation);
    console.log('kuda' + this.toStation);
    console.log('date' + this.date);
    this.journey = new JourneySubscription(this.fromStation.value, this.toStation.value, this.date);
    this.subscriptionService.createJourneySubscription(this.journey)
      .subscribe(data => console.log(data), error => console.log(error));
    this.journey = new JourneySubscription(null, null, null);
  }

  onSubmit() {
    this.save();
    this.router.navigate(['/journey']);
  }

  back(){
    this.router.navigate(['/journey']);
  }

  findStation(term: string){
    return this.subscriptionService.findStationByTerm(term)
      .subscribe(data => {
        this.options = data;
      });
  }

}
