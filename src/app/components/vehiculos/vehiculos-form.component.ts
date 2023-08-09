import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculosService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculos-form',
  templateUrl: './vehiculos-form.component.html',
  styleUrls: ['./vehiculos-form.component.css']
})
export class VehiculosFormComponent implements OnInit {

  public vehiculo: Vehiculo = new Vehiculo();

  public error: any;

  constructor(private service: VehiculosService, 
              private router: Router,
              private route: ActivatedRoute){ }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = Number(params.get('id'));
      if (id) {
        this.service.ver(id).subscribe(vehiculo => this.vehiculo = vehiculo);
      }
    });
  }

  public crear(): void {
    this.service.crear(this.vehiculo).subscribe(vehiculo => {
                  console.log(vehiculo);
                  Swal.fire('Nuevo:',`Vehículo con patente ${vehiculo.patente} registrado correctamente.`,'success');
                  this.router.navigate(['/vehiculos']);
                                            }, err => {
        if (err.status === 400) {
          this.error = err.error;
          console.log(this.error);
        }
      });
  }

  public editar(): void {
    this.service.editar(this.vehiculo).subscribe(vehiculo => {
                  console.log(vehiculo);
                  Swal.fire('Modificado:',`Vehículo con patente ${vehiculo.patente} actualizado correctamente.`,'success');
                  this.router.navigate(['/vehiculos']);
                                            }, err => {
        if (err.status === 400) {
          this.error = err.error;
          console.log(this.error);
        }
      });
  }
}
