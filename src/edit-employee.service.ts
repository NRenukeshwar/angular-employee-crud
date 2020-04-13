import {Employee} from './employee-data'
import {Injectable} from '@angular/core';

@Injectable()
export class EditEmployeeService
{
  data: Employee;
  
  setEmployee(e:Employee)
  {
    console.log(e);
    this.data=e;
  }

  getEmployee(): Employee
  {
     console.log(" get service");
      return this.data;
  }
}