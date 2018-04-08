import {Component, Input} from '@angular/core';

@Component({
    selector: 'data-table',
    templateUrl: 'data-table.html'
})

export class DataTableComponent {
  /*Table values*/
  @Input() public rows: Array<any> = [];

  /*Row Height*/
  @Input() public rowheight: string = '';

  /*Table Columns*/
  @Input()
  public set columns(values: Array<any>) {
    values.forEach((value: any) => {
      const column = this._columns.find((col: any) => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      }
      if (!column) {
        this._columns.push(value);
      }
    });
  }

  public get columns(): Array<any> {
    return this._columns;
  }

  private _columns: Array<any> = [];

  /*Get Each value based on the propertyname for the row*/
  public getData(row:  any, propertyName: string): string {
    return propertyName.split('.').reduce((prev: any, curr: string) => prev[curr], row);
  }
}
