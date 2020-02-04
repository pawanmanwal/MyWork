import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  
  employee: Employee = new Employee("","","",new Date(),new Date());
  retData:any;
  id:number;
  constructor(private service:EmployeeServiceService) { }

public deleteEmployee(id:number) {
  let resp= this.service.deleteEmployee(id);
  resp.subscribe((data)=>this.retData=data);
}
public findEmployees(){
  let resp= this.service.getEmployees(this.employee);
  resp.subscribe((data)=>this.retData=data);
 }

  ngOnInit() {
    //let resp=this.service.getUsers();
    //resp.subscribe((data)=>this.users=data);
  }

}
