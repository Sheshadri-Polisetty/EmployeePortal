import { Component } from '@angular/core';
import { IEmpInterface } from '../iemp-interface';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public emp:IEmpInterface[]=[];

  constructor(private empservice:EmpServiceService,private route:Router){}
  ngOnInit(): void {
    this.getallEmps();
  }

  getallEmps()
  {
    this.empservice.GetAllEmployees().subscribe(data=>{
      this.emp=data;
      console.log(this.emp);
    });
   

  }
   editEmployee(employeeId: number): void {
   
     // this.route.navigateByUrl( `/Update?id=${employeeId}`);
  }

  deleteEmployee(employeeId: number): void {
    this.empservice.deleteEmployeeById(employeeId).subscribe(data=>console.log(data));
  }

}
