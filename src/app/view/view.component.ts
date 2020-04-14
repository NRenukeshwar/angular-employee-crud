import { Component, OnInit } from '@angular/core';
import { DataService } from '../employee.service';
import { Employee } from '../employee-data';
import { Router } from '@angular/router';
import {EditEmployeeService} from '../edit-employee.service';

@Component({
  selector: 'view',
  templateUrl: './view.component.html'
  })
export class ViewEmployeeComponent implements OnInit  {
  constructor(private router: Router,private dataservice: DataService, private editService: EditEmployeeService) {}
    
  employees: Employee[]=[];
  
  getUsers(){
    this.dataservice.getEmployees().subscribe(data => {
      this.employees=data;
    });
  }
  deleteEmp(id:number)
  {
    console.log("delete"+id);
    this.dataservice.deleteEmployee(id).subscribe(data=>{this.getUsers();alert("Deleted")});
  }
  ngOnInit(){
    this.getUsers();
  }

}
