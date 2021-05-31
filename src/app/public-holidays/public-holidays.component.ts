import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Holiday } from 'app/model/holiday';

@Component({
  selector: 'app-public-holidays',
  templateUrl: './public-holidays.component.html',
  styleUrls: ['./public-holidays.component.css']
})
export class PublicHolidaysComponent implements OnInit {
  holidays: Holiday[] = [
    { id: '', title: 'Temp', date: new Date('2021-12-10') },
    { id: '', title: 'XYZ', date: new Date('2020-12-10') },
    { id: '', title: 'ABC', date: new Date('2019-12-10') },

  ];
  displayedColumns: string[] = ['SNo', 'Title', 'Date', 'Action'];
  dataSource = new MatTableDataSource(this.holidays);

  constructor() { }
  
  ngOnInit(): void {
  }

  applyFilter(value: any) {
    const filterValue = value;
    this.dataSource.filter = filterValue.trim();
  }

  addHoliday() {
    alert("Coming Soon");
  }
  editHoliday() {
    alert("Coming Soon");
  }
  deleteHoliday() {
    alert("Coming Soon");
  }
}
