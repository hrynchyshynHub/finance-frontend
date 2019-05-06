import {Station} from './station';

export class JourneySubscription {
  id: number;
  from: Station;
  to: Station;
  date: string;
  time: string;
  warningMessage : string;
  isActive : boolean;

  constructor(from:Station, to:Station, date:string){
    this.from = from;
    this.to = to;
    this.time = '00:00';
    this.isActive = true;
    this.date = date;
  }

}
