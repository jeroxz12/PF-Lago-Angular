import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NombreApellidoPipe } from 'src/app/pipes/nombreapellido.pipe';
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {
   
  studentsList: Student[] = [];
  displayedColumns: string[] = ['nombreCompleto', 'email', 'fechaIngreso', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource<Student>();
  
  constructor(private studentService: StudentService, public dialog:MatDialog, public snackBar:MatSnackBar) { 

  }

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.cargarEstudiantes();
    this.dataSource.paginator =this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEstudiantes():void{
    this.studentsList = this.studentService.students;
    console.log(this.studentsList);
    this.dataSource = new MatTableDataSource(this.studentsList);
  }
  borrarEstudiante(index: number){

    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '450px',
      data: {mensaje: 'Esta seguro de que quiere eliminar el estudiante?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if( result == 'confirmar'){
        this.studentService.borrarEstudiante(index);
        this.cargarEstudiantes();
        this.snackBar.open('Estudiante eliminado exitosamente!', '', {duration: 3000});
      }
      
    });

   
    
  }
}

