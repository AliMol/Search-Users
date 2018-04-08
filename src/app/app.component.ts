import { Component, OnInit } from '@angular/core';
import { TableData } from './MOCK_DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'User Search app';

  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'User Name', name: 'user_name'},
    {title: 'Email', name: 'email'},
    {title: 'Gender', name: 'gender'}
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public firstPage: number = 1;
  public totalPages: number = 1;
  public rowheight: string = '20px';
  public list = [];
  public searchResults = TableData;

  public config: any = {
    paging: true,
    className: ['table-striped', 'table-bordered']
  };

  private data: Array<any> = this.changePage(this.firstPage);

  public constructor() {
    /*Calculate the total pages based on the length of Data Devide by Items per page*/
    this.totalPages = Math.ceil(this.searchResults.length / this.itemsPerPage);
    this.totalPages < 1 ?  this.totalPages = 1 : '';
  }

  public ngOnInit(): void {
    this.onChangeTable(this.firstPage);
  }

  /*This Method will fetch the rows for each page based on the page number*/
  public onChangeTable(pagenumber: any): any {
    /*pagenumber variable is the value for current page
    * It can't be higher that total pages and can't be less than 1*/
    pagenumber > this.totalPages ? (pagenumber = this.totalPages) : '';
    pagenumber <= 0 ?  pagenumber = 1 : '';

    this.rows = this.changePage(pagenumber);
    this.changePagination(pagenumber);
    this.page = pagenumber;

    this.page > this.totalPages ? (this.page = this.totalPages) : '';
    this.page <= 0 ? (this.page = 1) : '';
  }

  public changePage(pagenumber: any): Array<any> {
    /*Fetch the records for each page based on the start and end variable*/
    const start = (pagenumber - 1) * this.itemsPerPage;
    const end = this.itemsPerPage > -1 ? (start + this.itemsPerPage) : this.searchResults.length;
    return this.searchResults.slice(start, end);
  }

  public changePagination(pagenumber: any): void{
    /*Defines The pages for pagination list */
    this.list = [];
    let start = pagenumber - 4 ;
    start <= 0 ?  start = 1 : '';

    let end = pagenumber + 4 ;
    end > this.totalPages ? end = this.totalPages : '';

    for (let _i = start ; _i <= end  ; _i++) {
        this.list.push(_i);
    }
  }

  public searchUser(username: any): any{
    /*Search the json data object based on user Input*/
    this.searchResults = [];
    for (var i = 0 ; i < TableData.length ; i++) {
      if (TableData[i].user_name.toLowerCase().indexOf(username.toLowerCase()) !== -1) {
        this.searchResults.push(TableData[i]);
      }
    }

    /*Refresh The datatable based on search results*/
    this.totalPages = Math.ceil(this.searchResults.length / this.itemsPerPage);
    this.totalPages < 1 ?  this.totalPages = 1 : '';
    this.onChangeTable(1);
  }
}
