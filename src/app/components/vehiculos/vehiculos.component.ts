import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { VehiculosService } from 'src/app/services/vehiculo.service';
import { Vehiculo } from 'src/app/models/vehiculo';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  public titulo: string = "Listado de Vehículos"
  public vehiculos: Vehiculo[] = [];

  public totalRegistros: number = 0;
  public paginaActual: number = 0;
  public totalPorPagina: number = 5;
  public pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: VehiculosService) {}

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
                                  this.vehiculos = p.content as Vehiculo[];
                                  this.totalRegistros = p.totalElements as number;
                                  this.paginator._intl.itemsPerPageLabel = 'Registros por página:';
                                });
  }
  public eliminar(vehiculo: Vehiculo): void{

    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Qué desea eliminar el vehículo con patente ${vehiculo.patente}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(vehiculo.id).subscribe(() => {
          //this.vehiculos = this.vehiculos.filter(a => a !== vehiculo);
          this.calcularRangos();
          Swal.fire('Eliminado:',`Vehículo con patente ${vehiculo.patente} eliminado correctamente.`,'success');
        });
      }
      else{
        Swal.fire('Cancelado:',`¡Eliminación cancelada!`,'warning');
      }
    });
  }

}
