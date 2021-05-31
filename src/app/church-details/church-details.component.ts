import { Component, OnInit } from '@angular/core';
import { Package } from 'app/model/package';

@Component({
  selector: 'app-church-details',
  templateUrl: './church-details.component.html',
  styleUrls: ['./church-details.component.css']
})
export class ChurchDetailsComponent implements OnInit {

  newData: any = {};
  packages: Array<Package> = [];
  counsellors: Array<String> = [];

  constructor() { }

  ngOnInit(): void {
    this.packages = [{
      packageName: "",
      packageSession: "",
      packageAmount: "",
      validFor: ""
    }];
    this.counsellors = [""];
  }

  addRowPackage(index) {
    this.newData = {
      packageName: "",
      packageSession: "",
      packageAmount: "",
      validFor: ""
    };
    this.packages.push(this.newData);

    // console.log(this.workExperiences);
    return true;
  }

  addRowCounsellor(index) {
    // this.newData = {
    //   packageName: "",
    //   packageSession: "",
    //   packageAmount: "",
    //   validFor: ""
    // };
    this.counsellors.push("");

    // console.log(this.workExperiences);
    return true;
  }

}
