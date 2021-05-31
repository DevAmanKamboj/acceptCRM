import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Billing } from 'app/model/billing';
import { Time } from '@angular/common';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.css']
})
export class BillingsComponent implements OnInit {
  // a: Time("sd");
  billings: Billing[] = [
    {
      date: new Date("2021-05-31"), time: new Date(2021, 12, 13, 18, 0, 0, 0), counsellor: "Amadea Seow",
      particulars: "Sharanya SP",
      appointmentFor: "Child Concerns(3-12)",
      amount: "",
      modeOfPayment: "",
      status: "To Pay"
    },
    {
      date: new Date("2021-05-31"), time: new Date(2021, 12, 13, 16, 30, 0, 0), counsellor: "Amadea Seow",
      particulars: "SHEWEI LEE",
      appointmentFor: "Child Concerns(3-12)",
      amount: "",
      modeOfPayment: "",
      status: "To Pay"
    },
    {
      date: new Date("2021-05-31"), time: new Date(2021, 12, 13, 13, 30, 0, 0), counsellor: "Amadea Seow",
      particulars: "Choo Liping",
      appointmentFor: "Child Concerns(13-19)",
      amount: "",
      modeOfPayment: "",
      status: "To Pay"
    }

  ];




  displayedColumns: string[] = ['date', 'time', 'counsellor', 'particulars', 'appointmentFor', 'amount', 'modeOfPayment', 'status', 'actions'];
  dataSource = new MatTableDataSource(this.billings);


  applyFilter(value: any) {
    const filterValue = value;
    this.dataSource.filter = filterValue.trim();
  }

  constructor() { }

  ngOnInit(): void {
  }

  editBilling() {
    alert("Coming Soon..");
  }

}
