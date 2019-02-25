import { Component, OnInit } from '@angular/core';
import {Currency} from '../models/currency';
import {CurrencyService} from '../services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currentCurrenncy: Currency;

  constructor(private currencyService:CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrency().subscribe(
      currency => this.currentCurrenncy = currency);
  }

}
