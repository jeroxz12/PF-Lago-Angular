import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditStudentComponent } from './components/students/add-edit-student/add-edit-student.component';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';

const routes: Routes = [
  {path: 'add', component: AddEditStudentComponent},
  {path: '', component: ListStudentsComponent},
  {path: 'edit/:id', component: AddEditStudentComponent},
  {path: '**', component: ListStudentsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
