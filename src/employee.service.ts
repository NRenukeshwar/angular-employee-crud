import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError} from 'rxjs/operators';

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
}