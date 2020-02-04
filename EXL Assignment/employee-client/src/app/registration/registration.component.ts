import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  employee: Employee = new Employee("","","",new Date(),new Date());
  message:any;
  constructor(private service:EmployeeServiceService) { }

  ngOnInit() {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.employee);
    resp.subscribe((data)=>this.message=data);
  }

  submitted=false;
  onSubmit() {
    this.submitted=true;
    console.log(this.employee);
  }
}
