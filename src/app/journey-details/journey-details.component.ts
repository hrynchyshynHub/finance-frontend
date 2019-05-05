import {Component, Input, OnInit} from '@angular/core';
import {JourneySubscription} from '../models/journeySubscription';
import {SubscriptionService} from '../services/subscription.service';
import {JourneySubscriptionComponent} from '../journey-subscription/journey-subscription.component';

@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.css']
})
export class JourneyDetailsComponent implements OnInit {

  @Input() journeySubscription: JourneySubscription;

  constructor(private subService: SubscriptionService, private listComponent: JourneySubscriptionComponent) { }

  ngOnInit() {
  }

}
