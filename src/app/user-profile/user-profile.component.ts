import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // Formulario y validacion de dato
  Formulario: FormGroup = this.fb.group({
    titulo: [, [Validators.required, Validators.maxLength(99)]],
    descripcion: [, [Validators.required, Validators.maxLength(255)]],
    fechacreacion: [Validators.required]

  });

  activo: boolean = false;

  constructor(private fb: FormBuilder, private data: DataService, private router: Router) {
  }

  // Verificacion de los campos del formularios
  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    this.activo= true
    this.data.post('tareas', 'insert', this.Formulario.value).subscribe((dato: any) => {
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
