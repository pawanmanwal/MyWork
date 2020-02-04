import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {AppConfiguration} from './app-configuration';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  
  restAPIURL:string;
  constructor(private http:HttpClient, private appConfig: AppConfiguration) {
    this.restAPIURL = appConfig.restAPIURL;
    }

  public doRegistration(employee){
    return this.http.post(this.restAPIURL + "create",employee,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(this.restAPIURL + "getAllUsers");
  }

  public getEmployees(employee){
    return this.http.post(this.restAPIURL + "employeeSearch",employee);
  }


  public deleteEmployee(id){
    return this.http.delete(this.restAPIURL + "/delete/"+id);
  }


}
