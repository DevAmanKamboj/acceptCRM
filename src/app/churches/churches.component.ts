import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Churche } from 'app/model/churche';

@Component({
  selector: 'app-churches',
  templateUrl: './churches.component.html',
  styleUrls: ['./churches.component.css']
})
export class ChurchesComponent {
  churches: Churche[] = [
    { OrgID: 'CH123', Name: 'ABC Church', Denomination: 'Singapore', ContactPerson: 'John Tan', Email: 'sam@live.com', Mobile: '+658398398', Status: 'Active' },
    { OrgID: 'CH124', Name: 'XYZ Church', Denomination: 'America', ContactPerson: 'Robin Tan', Email: 'abc@gmail.com', Mobile: '+123456789', Status: 'Active' },

  ];


  displayedColumns: string[] = ['OrgID', 'Name', 'ContactPerson', 'Email', 'Mobile', 'Status', 'Edit'];
  dataSource = new MatTableDataSource(this.churches);

  constructor(private router: Router) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addChurch() {

    // alert("details");
    this.router.navigate(['/churchDetails']);
  }

  churchDetails() {
    alert("Edit Church details");
  }

}
