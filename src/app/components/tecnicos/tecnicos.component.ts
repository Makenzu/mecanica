import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { TecnicosService } from '../../services/tecnico.service';
import { Tecnico } from '../../models/tecnico';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { apiTecnicos } from '../../../environments/environment';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.css']
})
export class TecnicosComponent implements OnInit {

  public baseEndpoint = apiTecnicos.apiRoot;
  
  public titulo: string = 'Listado de Tecnicos';
  public tecnicos: Tecnico[] = [];

  public totalRegistros: number = 0;
  public paginaActual: number = 0;
  public totalPorPagina: number = 5;
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

  constructor(private service: TecnicosService) {}

  ngOnInit(){
    this.calcularRangos();
  }

  public paginar(event: PageEvent): void {
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();
  }
  private calcularRangos(){
    this.service.listarPaginas(this.paginaActual.toString(), 
                               this.totalPorPagina.toString())
                              .subscribe(p => 
                                {
                                  this.tecnicos = p.content as Tecnico[];
                                  this.totalRegistros = p.totalElements as number;
                                  this.paginator._intl.itemsPerPageLabel = 'Registros por página:';
                                });
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
          //this.tecnicos = this.tecnicos.filter(a => a !== tecnico);
          this.calcularRangos();
          Swal.fire('Eliminado:',`Técnico ${tecnico.nombre} eliminado correctamente.`,'success');
        });
      }
      else{
        Swal.fire('Cancelado:',`¡Eliminación cancelada!`,'warning');
      }
    });
  }

}
