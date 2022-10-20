import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  API_URL:string='http://localjost:52493/api'
  constructor(private _http:HttpClient) { }

  getAllDepartment(): Observable<any>{
    return this._http.get(this.API_URL +'/dept/GetAllDepartment')
  }
}
