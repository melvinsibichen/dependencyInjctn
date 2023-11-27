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
    {
      "name": "Alice Johnson",
      "age": 30,
      "gender": "Female",
      "location": "New York",
      "email": "alice@example.com",
      "phone": "+1 (555) 123-4567"
    },
    {
      "name": "Bob Smith",
      "age": 28,
      "gender": "Male",
      "location": "London",
      "email": "bob@example.com",
      "phone": "+44 20 1234 5678"
    },
    {
      "name": "Emily Davis",
      "age": 22,
      "gender": "Female",
      "location": "Sydney",
      "email": "emily@example.com",
      "phone": "+61 2 9876 5432"
    },
    {
      "name": "Carlos Rodriguez",
      "age": 32,
      "gender": "Male",
      "location": "Madrid",
      "email": "carlos@example.com",
      "phone": "+34 91 876 5432"
    }

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

    {
      "name": "Alice Johnson",
      "Qualification": "BSc in Computer Science",
      "College": "University of New York",
      "Experience": "Software Engineer",
      "email": "alice@example.com",
      "state": "New York",
      "phone": "+1 (555) 123-4567"
    },
    {
      "name": "Bob Smith",
      "Qualification": "MSc in Software Engineering",
      "College": "Imperial College London",
      "Experience": "Full Stack Developer",
      "email": "bob@example.com",
      "state": "London",
      "phone": "+44 20 1234 5678"
    },
    {
      "name": "Emily Davis",
      "Qualification": "BEng in Information Technology",
      "College": "University of Sydney",
      "Experience": "Web Developer",
      "email": "emily@example.com",
      "state": "New South Wales",
      "phone": "+61 2 9876 5432"
    },
    {
      "name": "Carlos Rodriguez",
      "Qualification": "PhD in Computer Science",
      "College": "University of Madrid",
      "Experience": "Senior Software Engineer",
      "email": "carlos@example.com",
      "state": "Madrid",
      "phone": "+34 91 876 5432"
    }

  ];


  constructor() { }

  getPersonaldetails(): any[] {
    return this.personaldetails;
  }

  getOfficialdetails(): any[] {
    return this.officialdetails;
  }
}
