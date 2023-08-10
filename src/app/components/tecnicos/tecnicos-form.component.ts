import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicosService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnicos-form',
  templateUrl: './tecnicos-form.component.html',
  styleUrls: ['./tecnicos-form.component.css'],
})
export class TecnicosFormComponent implements OnInit {
  public tecnico: Tecnico = new Tecnico();

  public error: any;

  private fotoSeleccionada: File | any;

  constructor(
    private service: TecnicosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id: number = Number(params.get('id'));
      if (id) {
        this.service.ver(id).subscribe((tecnico) => (this.tecnico = tecnico));
      }
    });
  }

  public crear(): void {
    if (!this.fotoSeleccionada) {
      this.service.crear(this.tecnico).subscribe(
        (tecnico) => {
          console.log(tecnico);
          Swal.fire(
            'Nuevo:',
            `Técnico ${tecnico.nombre} ${tecnico.apellido} registrado correctamente.`,
            'success'
          );
          this.router.navigate(['/tecnicos']);
        },
        (err) => {
          if (err.status === 400) {
            this.error = err.error;
            console.log(this.error);
          }
        }
      );
    } else {
      this.service.crearConFoto(this.tecnico, this.fotoSeleccionada).subscribe(
        (tecnico) => {
          console.log(tecnico);
          Swal.fire(
            'Nuevo:',
            `Técnico ${tecnico.nombre} ${tecnico.apellido} registrado correctamente.`,
            'success'
          );
          this.router.navigate(['/tecnicos']);
        },
        (err) => {
          if (err.status === 400) {
            this.error = err.error;
            console.log(this.error);
          }
        }
      );
    }
  }

  public editar(): void {
    if (!this.fotoSeleccionada) {
      this.service.editar(this.tecnico).subscribe(
        (tecnico) => {
          console.log(tecnico);
          Swal.fire(
            'Modificado:',
            `Técnico ${tecnico.nombre} ${tecnico.apellido} actualizado correctamente.`,
            'success'
          );
          this.router.navigate(['/tecnicos']);
        },
        (err) => {
          if (err.status === 400) {
            this.error = err.error;
            console.log(this.error);
          }
        }
      );
    } else {
      this.service.editarConFoto(this.tecnico, this.fotoSeleccionada).subscribe(
        (tecnico) => {
          console.log(tecnico);
          Swal.fire(
            'Modificado:',
            `Técnico ${tecnico.nombre} ${tecnico.apellido} actualizado correctamente.`,
            'success'
          );
          this.router.navigate(['/tecnicos']);
        },
        (err) => {
          if (err.status === 400) {
            this.error = err.error;
            console.log(this.error);
          }
        }
      );
    }
  }

  public seleccionarFoto(event: any): void {
    this.fotoSeleccionada = event.target.files[0];
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      this.fotoSeleccionada = null;
      Swal.fire({
        title: 'Formato incorrecto',
        text: 'El archivo debe ser una imagen.',
        icon: 'error',
        timer: 3500,
        color: '#ff0000',
        backdrop: `rgba(19,11,32,0.9)`
      })
    }
  }
}
