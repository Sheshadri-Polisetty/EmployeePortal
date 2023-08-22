import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmpInterface} from './iemp-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private Http:HttpClient) {  }
  private api:string ="https://localhost:44354/api/Employee";
 
  GetAllEmployees():Observable<IEmpInterface[]>{
    return this.Http.get<IEmpInterface[]>(this.api);
  }

  PostEmpDetails(e:IEmpInterface):Observable<any>
  {
    return this.Http.post(this.api,e);
  }
  PutEmpDetails(e:IEmpInterface):Observable<any>
  {
    return this.Http.put(this.api+"/"+e.id,e);
  }
  GetEmployeeById(e:number):Observable<any>{
    return this.Http.get<IEmpInterface[]>(this.api+"/"+e);
  }
  deleteEmployeeById(e:number):Observable<any>{
    return this.Http.delete(this.api+"/"+e);
  }
}
