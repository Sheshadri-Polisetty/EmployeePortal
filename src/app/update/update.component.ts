import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmpInterface } from '../iemp-interface';
import {EmpServiceService} from '../emp-service.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employee:IEmpInterface={
    id:0,
    name:"",
    department:"",
    email:"",
    salary:"",
    phoneNumber:""

  };

  constructor(private route: ActivatedRoute, private router: Router,private empServices: EmpServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employee.id = +params['id'];
      console.log(params['id']);
      console.log("ok");
      

      console.log(this.employee.id);
     
     this.empServices.GetEmployeeById(Number(this.employee.id)).subscribe(data=>{
      this.employee=data;
    console.log(this.employee);});
     
     
     
      
    });
  }

  saveChanges(data:any): void {

   data.id=this.employee.id;
     this.empServices.PutEmpDetails(data).subscribe(result=>console.log(result));
     
    this.router.navigate(['/home']);
  }

  cancel(): void {
   
    this.router.navigate(['/home']);
  }
}
