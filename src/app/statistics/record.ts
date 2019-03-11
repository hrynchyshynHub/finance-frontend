export class ChartRecord {
  label: string;
  data: Array<number>;


  constructor(label: string, data:Array<number>) {
    this.label = label;
    this.data = data;
  }
}
