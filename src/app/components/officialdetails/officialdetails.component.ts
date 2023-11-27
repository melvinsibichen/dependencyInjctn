import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-officialdetails',
  templateUrl: './officialdetails.component.html',
  styleUrls: ['./officialdetails.component.scss']
})
export class OfficialdetailsComponent {

  officialdetails: any[]=[];

  constructor(private empService:EmployeeService ){}

  ngOnInit():void{
    this.officialdetails=this.empService?.getOfficialdetails();
  }


}

