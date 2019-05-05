import { Component, OnInit } from '@angular/core';
import {JourneySubscription} from '../models/journeySubscription';
import {SubscriptionService} from '../services/subscription.service';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-journey-subscription',
  templateUrl: './journey-subscription.component.html',
  styleUrls: ['./journey-subscription.component.css']
})
export class JourneySubscriptionComponent implements OnInit {

  dataSource: JourneySubscription[];
  displayedColumns: string[] = ['select','id', 'from', 'to', 'date'];
  selection = new SelectionModel<JourneySubscription>(true, []);

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.reloadData();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: JourneySubscription): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  reloadData() {
    this.subscriptionService.getJourneySubscription().subscribe(
      data => {this.dataSource = data;}
    );
  }

  //TODO:
  deleteJourney() {
    console.log(this.selection);

    // this.subscriptionService.deleteJourneySubscription(id)
    //   .subscribe(
    //     data => {
    //       this.reloadData();
    //     });
  }

}
