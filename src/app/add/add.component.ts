import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee-data';
import { DataService} from '../employee.service'
import {Router} from '@angular/router';

@Component({
  selector: 'add',
  templateUrl: './add.component.html'
})
export class AddEmployeeComponent {
   employee: Employee;
  constructor( private dataService: DataService, private router:Router){};

  goBack(): void {
    this.router.navigate(['/employees']);
  }
   add(name,location,email,mobile)
   {
     this.employee={name:"",location:"",email:"",mobile:""};
     this.employee.name=name;
     this.employee.location=location;
     this.employee.email=email;
     this.employee.mobile=mobile;
     console.log(this.employee);
    
     this.dataService.addEmployee(this.employee).subscribe(() => this.goBack());
   }
}