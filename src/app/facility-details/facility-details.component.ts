import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility-details',
  templateUrl: './facility-details.component.html',
  styleUrls: ['./facility-details.component.css']
})
export class FacilityDetailsComponent implements OnInit {

  startTime: Time;
  closingTime: Time;
  borderColor: String;
  availabilityMonday: Boolean[] = [false, true, true, true, false, true, true, false, true];
  availabilityTuesday: Boolean[] = [true, true, false, true, false, true, true, true, false];
  availabilityWednesday: Boolean[] = [false, true, true, true, false, true, false, false, true];
  availabilityThursday: Boolean[] = [true, true, true, true, true, true, true, true, false];
  availabilityFriday: Boolean[] = [false, true, true, true, false, true, false, false, true];
  availabilitySaturday: Boolean[] = [false, true, true, true, true, true, true, true, false];
  availabilitySunday: Boolean[] = [false, false, false, false, false, false, false, false, false];
  constructor() { }

  ngOnInit(): void {
  }

  timeValidation() {
    // alert(this.startTime);
    // alert(this.closingTime);

    if (this.closingTime < this.startTime) {
      alert("Closing Time can't be less than start Time");
      this.borderColor = "redBorder";
    }
    else {
      this.borderColor = "";
    }
    // if (this.closingTime.minutes < this.startTime.minutes) {
    //   alert("closing time can't be less than start time");
    // }
  }


}
