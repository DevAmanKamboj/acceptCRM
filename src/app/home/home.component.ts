import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


export interface PeriodicElement {
  UserID: String,
  Name: String,
  Gender: String,
  Age: String,
  Ethnicity: String,
  Email: String,
  Mobile: String,
  Status: String
}

const ELEMENT_DATA: PeriodicElement[] = [
  { UserID: 'PR123', Name: 'Olive Branch', Gender: 'Male', Age: '43', Ethnicity: 'Indian', Email: 'sam@live.com', Mobile: '+658398398', Status: 'Active' },

  { UserID: 'PR124', Name: 'Rakesh Kumar', Gender: 'Male', Age: '30', Ethnicity: 'Indian', Email: 'rakesh@gmail.com', Mobile: '+1234567', Status: 'Active' },

  { UserID: 'PR125', Name: 'Parneeti Chopra', Gender: 'Female', Age: '35', Ethnicity: 'Indian', Email: 'parneeti@gmail.com', Mobile: '+651234567', Status: 'Active' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayedColumns: string[] = ['UserID', 'Name', 'Gender', 'Age', 'Ethnicity', 'Email', 'Mobile', 'Status', 'Edit'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private router: Router) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  professionalDetails() {

    // alert("details");
    this.router.navigate(['/professionalDetails']);
  }

}
