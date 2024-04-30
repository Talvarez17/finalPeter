import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  // Inicializacion de arreglo
  Lista: any = [];


  constructor(private data: DataService) {
    this.lista();
  }

  //Obtencion de los libros por usuario
  lista() {
    this.data.get('tareas', 'getAll').subscribe((dato: any) => {
      console.log(dato);
      
      this.Lista = dato.reverse();
    });
  }

  eliminar(id: any) {
    if (confirm('¿Quieres eliminar esta tarea? No podrás recuperarlo después.')) {
      this.data.getO('tareas', 'delete', id).subscribe((dato: any) => {
         
        if (dato) {
            alert('Se ha eliminado la tarea de la lista.');
            location.reload();
          }
        },
        (error) => {
          if (error.status === 400) {
            alert('No se ha podido eliminar el registro.');
          }
        }
      );
    }
  }


  ngOnInit() {
  }

}
