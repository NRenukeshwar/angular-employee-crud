import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../employee-data';
import {EditEmployeeService} from '../../edit-employee.service';
@Component({
  selector: 'edit',
  templateUrl: './edit.component.html'
})
export class EditEmployeeComponent implements OnInit{
  constructor(private editService :EditEmployeeService){};
  employee: Employee;
  ngOnInit()
  {
    if(this.editService.getEmployee()!=null)
    this.employee=this.editService.getEmployee();
    

  }
}