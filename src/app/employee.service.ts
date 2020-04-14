import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

import { Employee } from './employee-data';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 private apiurl = 'api/employees';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiurl).pipe(
      catchError(this.handleError)
    );
  }
  getEmployee(id:number): Observable<Employee> {
    const url = `${this.apiurl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError));
  }
  addEmployee(emp:Employee):Observable<any> 
  {
    
    return this.http.post<Employee>(this.apiurl, emp, this.httpOptions).pipe(
    catchError(this.handleError));
    console.log("post"+emp.name); 
  }
  updateEmployee(emp:Employee):Observable<any> 
  {
    return this.http.put<Employee>(this.apiurl, emp, this.httpOptions).pipe(
    catchError(this.handleError)
  );
   console.log("update"+emp.name); 
  }
  deleteEmployee(id:number):Observable<any>
  {
    const url = `${this.apiurl}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions).pipe(catchError(this.handleError));
  console.log("delete"+id);
  }

   searchEmployees(term: string): Observable<Employee[]> {
    
   if(term.trim()!==""){
    return this.http.get<Employee[]>(`${this.apiurl}/?name=${term.trim()}`).pipe(
      catchError(this.handleError)
    );
   }
    else
    { console.log("else");
    return this.http.get<Employee[]>(this.apiurl).pipe(
      catchError(this.handleError)
    );
    }
  }
}