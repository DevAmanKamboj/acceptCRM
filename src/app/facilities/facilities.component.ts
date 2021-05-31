import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Facility } from 'app/model/facility';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  facilities: Facility[] = [{
    FacilityID: "FA123",
    Name: "ABC Room 1",
    Location: "Location",
    FacilityType: "Private",
    Status: "Active"
  }];

  displayedColumns: string[] = ["FacilityID", 'Name', 'Location', 'FacilityType', 'Status', 'Edit'];
  dataSource = new MatTableDataSource(this.facilities);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addFacility() {
    // alert("details");
    this.router.navigate(['/facilityDetails']);
  }

  facilityDetails() {
    // alert("Facility Details coming soon..");
    this.router.navigate(['/facilityDetails']);
  }
}
