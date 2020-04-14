import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: './details.component.html'
  
})
export class EmployeeComponent  {
  @Input() name: string;
}
