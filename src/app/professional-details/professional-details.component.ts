import { Component, OnInit } from '@angular/core';
import { EducationalQualification } from 'app/model/educational-qualification';
import { Memberships } from 'app/model/memberships';
import { WorkExperience } from 'app/model/work-experience';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {


  educationalQualifications: Array<EducationalQualification> = [
  ];
  newData: any = {};
  workExperiences: Array<WorkExperience> = [];
  memberships: Array<Memberships> = [];
  constructor() { }




  ngOnInit(): void {
    this.educationalQualifications = [
      { CourseTitle: "MA in counseling", Institution: "Singapore University", YearOfCompletion: "2003", Document: "" },
      { CourseTitle: "PG Diploma, counseling", Institution: "UK University", YearOfCompletion: "2001", Document: "" }
    ];

    this.workExperiences = [
      { Role: "Director", Organisation: "ABC Organisation", City: "Banglore", Period: "2011-2014" }
    ];

    this.memberships = [
      { OrganisationName: "Singapore Association for counseling", MembershipStatus: "Affiliate", From: "2010", Until: "2017" }
    ];
  }

  addRowEducation(index) {
    this.newData = { CourseTitle: "", Institution: "", YearOfCompletion: "", Document: "" };
    this.educationalQualifications.push(this.newData);

    console.log(this.educationalQualifications);
    return true;
  }

  addRowExperience(index) {
    this.newData = { Role: "", Organisation: "", City: "", Period: "" };
    this.workExperiences.push(this.newData);

    console.log(this.workExperiences);
    return true;
  }

  addRowMemberShip(index) {
    this.newData = { OrganisationName: "", MembershipStatus: "", From: "", Until: "" };
    this.memberships.push(this.newData);

    console.log(this.memberships);
    return true;
  }

  deleteRowEducation(index) {
    if (this.educationalQualifications.length == 1) {
      return false;
    } else {
      this.educationalQualifications.splice(index, 1);
      return true;
    }
  }

}
