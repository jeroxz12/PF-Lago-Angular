import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../models/student";

@Pipe({
    name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

transform(value: Student, ...args: string[]) {
    return value.nombre + ' ' + value.apellido;
}

}