import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../employee-data';
@Component({
  selector: 'add',
  templateUrl: './add.component.html'
})
export class AddEmployeeComponent {
   employee: Employee;
  

   addEmployee(id,name)
   {
     alert(id+" "+name);
   }
}