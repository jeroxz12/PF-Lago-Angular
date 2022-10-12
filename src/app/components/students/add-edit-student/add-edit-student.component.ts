import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  addEditStudentForm: FormGroup;
  idEstudiante!:number;
  accion:string = "Agregar"

  constructor(private fb:FormBuilder, private snackBar:MatSnackBar, private router:Router, private studentService:StudentService, private aRoute:ActivatedRoute) {
    this.addEditStudentForm = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apellido: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      email:['',[Validators.required, Validators.maxLength(255), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      fechaRegistro: ['',[Validators.required]],
      telefono: [,[Validators.required, Validators.minLength(6)]]
    });

    this.idEstudiante = this.aRoute.snapshot.params['id'];

   }

  ngOnInit(): void {
    if(this.idEstudiante !== undefined){
      this.accion = 'Editar';
      this.estudianteAEditar();
    }
    
  }

  guardarEstudiante():void{
    const estudiante:Student = {
      nombre:this.addEditStudentForm.get('nombre')?.value,
      apellido:this.addEditStudentForm.get('apellido')?.value,
      email:this.addEditStudentForm.get('email')?.value,
      fechaIngreso:this.addEditStudentForm.get('fechaRegistro')?.value,
      telefono:this.addEditStudentForm.get('telefono')?.value
    }
    if(this.idEstudiante !== undefined){
      this.actualizarEstudiante(estudiante);
    } else {
      this.agregarEstudiante(estudiante);
    }
    
  }
  agregarEstudiante(estudiante:Student){
    this.studentService.addEstudiante(estudiante);
    this.snackBar.open("El estudiante fue guardado exitosamente!",'', {
      duration: 3000
    })
    this.router.navigate(['/']);
  }
  actualizarEstudiante(estudiante:Student):void{
    this.studentService.editEstudiante(estudiante,this.idEstudiante);
    this.snackBar.open('El estudiante fue editado exitosamente!', '', {
      duration:3000
    })
    this.router.navigate(['/']);
  }
  estudianteAEditar():void{
    const estudiante:Student = this.studentService.findByIndex(this.idEstudiante);
    this.addEditStudentForm.patchValue({
      nombre:estudiante.nombre,
      apellido: estudiante.apellido,
      email: estudiante.email,
      fechaRegistro: estudiante.fechaIngreso,
      telefono: estudiante.telefono
    });
  }



}
