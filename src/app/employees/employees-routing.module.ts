// employees.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { InsertComponent } from '../insert/insert.component';

const employeesRoutes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'insert', component: InsertComponent },
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forChild(employeesRoutes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
