import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculosService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  public titulo: string = "Listado de Vehículos"
  public vehiculos: Vehiculo[] = [];

  constructor(private service: VehiculosService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(vehiculos => this.vehiculos = vehiculos);
  }

}
