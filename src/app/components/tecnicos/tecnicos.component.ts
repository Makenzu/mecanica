import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { TecnicosService } from 'src/app/services/tecnico.service';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.css']
})
export class TecnicosComponent implements OnInit {

  public titulo: string = 'Listado de Tecnicos';
  public tecnicos: Tecnico[] = [];

  constructor(private service: TecnicosService) {}

  ngOnInit(){
    //abreviado cuando dentro de la expresion landa "observador" tiene una sola instruccion
    this.service.listar().subscribe(tecnicos => this.tecnicos = tecnicos);
    //Cuando tenga mas de una instruccion usar llaves
    // this.service.listar().subscribe(tecnicos => {
    //   this.tecnicos = tecnicos;
    // })
  }

  public eliminar(tecnico: Tecnico): void{

    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Qué desea eliminar al técnico ${tecnico.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(tecnico.id).subscribe(() => {
          this.tecnicos = this.tecnicos.filter(a => a !== tecnico);
          Swal.fire('Eliminado:',`Técnico ${tecnico.nombre} eliminado correctamente.`,'success');
        });
      }
      else{
        Swal.fire('Cancelado:',`¡Eliminación cancelada!`,'warning');
      }
    });
  }

}
