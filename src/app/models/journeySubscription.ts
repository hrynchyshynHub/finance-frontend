export class JourneySubscription {
  id: number;
  from: number;
  to: number;
  date: string;
  time: string;
  warningMessage : string;
  isActive : boolean;

  constructor(from:number, to:number, date:string){
    this.from = from;
    this.to = to;
    this.time = '00:00';
    this.isActive = true;
    this.date = date;
  }

}
