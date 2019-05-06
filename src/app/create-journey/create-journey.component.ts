import {JourneySubscription} from '../models/journeySubscription';
import {SubscriptionService} from '../services/subscription.service';
import {Router} from '@angular/router';
import {Station} from '../models/station';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
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
  options: Station[];

  public journeyForm: FormGroup;

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.journeyForm = this.getJourneyForm();
  }

  private getJourneyForm(): FormGroup {
    return this.fb.group({
      from: new FormControl(''),
      to: new FormControl(''),
      date: new FormControl(''),
    })
  }

  save() {
    debugger;
    this.journey = new JourneySubscription(this.journeyForm.value.from, this.journeyForm.value.to, this.journeyForm.value.date);
    this.subscriptionService.createJourneySubscription(this.journey)
      .subscribe(data => console.log(data), error => console.log(error));
    this.journey = new JourneySubscription(null, null, null);
    this.router.navigate(['/journey']);
  }

  onSubmit() {
    this.save();
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

  clearOptions(): void {
    this.options = []
  }

  displayFn() {
    return searchStr => {
      const el = this.options ? this.options.find(el => el.value === searchStr.value) : null;
      return  el ? el.title : (searchStr.title || '');
    }
  }
}
