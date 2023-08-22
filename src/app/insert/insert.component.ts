import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmpInterface } from '../iemp-interface';
import {EmpServiceService} from '../emp-service.service'

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  constructor(private route: ActivatedRoute, private router: Router,private empServices: EmpServiceService) 
  {
    
   }
   employee:IEmpInterface={
    id:0,
    name:"",
    department:"",
    email:"",
    salary:"",
    phoneNumber:""

  };

  saveChanges(data:any){
    this.empServices.PostEmpDetails(data).subscribe(result=>console.log(result));
    }
  cancel(){
    this.router.navigate(['/home']);
  }
}
