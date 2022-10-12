import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsList: Student[] = [
    { nombre: 'Jeronimo', apellido: 'Lago', email: 'jerolago86@gmail.com', fechaIngreso: new Date('2022-08-10'), telefono: '2294929299' },
    { nombre: 'Roberto', apellido: 'Carlos', email: 'rc@hotmail.es', fechaIngreso: new Date('2022-03-24'), telefono: '2294923491' },
    { nombre: 'Francisco', apellido: 'Perez', email: 'fernando122@gmail.com', fechaIngreso: new Date('2022-07-10'), telefono: '2294912321' },
    { nombre: 'John', apellido: 'Doe', email: 'john99@outlook.com', fechaIngreso: new Date('2022-01-10'), telefono: '2294988899' },
    { nombre: 'Mariano', apellido: 'Closs', email: 'closs11@gmail.com', fechaIngreso: new Date('2022-01-19'), telefono: '2294990099' },
    { nombre: 'Luciana', apellido: 'Gonzales', email: 'lg@hotmail.com.ar', fechaIngreso: new Date('2022-02-14'), telefono: '2294927179' },
    { nombre: 'Fernanda', apellido: 'Gomez', email: 'fernanda@gmail.com', fechaIngreso: new Date('2022-05-09'), telefono: '2294872299' },
    { nombre: 'Maria', apellido: 'Doe', email: 'maridoe@outlook.es', fechaIngreso: new Date('2022-03-14'), telefono: '2294165299' },
    { nombre: 'Roxana', apellido: 'Quart', email: 'roxq@gmail.com', fechaIngreso: new Date('2022-09-11'), telefono: '2294871299' },
    { nombre: 'Richard', apellido: 'Dublin', email: 'rd@gmail.com', fechaIngreso: new Date('2022-01-12'), telefono: '2299129299' }
  ];

  constructor() { }

  get students():Student[]{
    return this.studentsList;
  }

  borrarEstudiante(index:number){
    this.studentsList.splice(index,1);
  }

  addEstudiante(estudiante:Student):void{
    this.studentsList.unshift(estudiante);
  }

  findByIndex(index:number):Student{
    return this.students[index];
  }

  editEstudiante(estudiante:Student, index:number):void{
    this.students[index] = {
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      email: estudiante.email,
      fechaIngreso: estudiante.fechaIngreso,
      telefono: estudiante.telefono
    };
  }
}
