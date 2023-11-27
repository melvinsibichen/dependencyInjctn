import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.scss']
})
export class PersonaldetailsComponent {

  personaldetails: any[]=[];

  constructor(private empService:EmployeeService ){}

  ngOnInit():void{
    this.personaldetails=this.empService?.getPersonaldetails();
  }
}
