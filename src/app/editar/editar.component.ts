import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private data: DataService, private fb: FormBuilder, private router: Router, private activeRouter: ActivatedRoute) {
    // Obtencion de párametros e inicializacion de funciones
    const id = this.activeRouter.snapshot.params['id'];
    this.obtenerRegistro(id);
  }
  activo: boolean = false;
  // Formulario y validacion de los datos

  Formulario: FormGroup = this.fb.group({
    id: [],
    titulo: [, [Validators.required, Validators.maxLength(99)]],
    descripcion: [, [Validators.required, Validators.maxLength(255)]],
    fechacreacion: [Validators.required]
  });


  // Funcion de verificacion de llenado correcto de los campos del formulario
  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }


  // Funcion de obtencion de datos y parchado del formulario por metodo get
  obtenerRegistro(id: any) {
    this.data.getO('tareas', 'getOne', id).subscribe((dato: any) => {
      console.log(dato);
      
      this.Formulario.patchValue({
        id: dato.id,
        titulo: dato.titulo,
        descripcion: dato.descripcion,
        fechacreacion: dato.fechacreacion
      });
    });

  }

  guardar() {
    this.activo = true
    this.data.post('tareas', 'update', this.Formulario.value).subscribe((dato: any) => {
      if (dato) {
        alert('Se ha agregado una nueva tarea');
        this.router.navigate(['/lista']);
      }
    },
      (error) => {
        if (error.status === 400) {
          alert('Parece que algo está mal, verifica tus datos');
        }
      });
  }

  ngOnInit() {
  }

}
