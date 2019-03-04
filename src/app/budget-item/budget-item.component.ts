import {Component, Input, OnInit} from '@angular/core';
import {Budget} from '../models/budget';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit {


  @Input()
  budget: Budget;



  constructor() { }

  ngOnInit() {
  }

}
