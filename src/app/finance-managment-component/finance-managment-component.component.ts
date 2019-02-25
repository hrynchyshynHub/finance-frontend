import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../services/currency.service';
import {Currency} from '../models/currency';

@Component({
  selector: 'app-finance-managment-component',
  templateUrl: './finance-managment-component.component.html',
  styleUrls: ['./finance-managment-component.component.css']
})
export class FinanceManagmentComponentComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

}
