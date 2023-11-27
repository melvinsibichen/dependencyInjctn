import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  personaldetails=[
    {
      "name": "Melvin Sibichen",
      "age": 25,
      "gender": "Male",
      "location": "Kottyam",
      "email": "melvin.@example.com",      
      "phone": "+91 9207008545"
    },

  ];

  officialdetails=[
    {
      "name": "Melvin Sibichen",     
      "Qualification":"MCA",  
      "College":"Rajagiri college of Social Sciences",
      "Experience":"Frontend Developer",    
      "email": "melvin@example.com",
      "state": "Kerala",
      "phone": "+91 9207008545"
    },

  ];


  constructor() { }

  getPersonaldetails(): any[] {
    return this.personaldetails;
  }

  getOfficialdetails(): any[] {
    return this.officialdetails;
  }
}
