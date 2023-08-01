import { Component, OnInit } from '@angular/core';
import { TecnicosService } from 'src/app/services/tecnico.service';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnicos',
  templateUrl: './tecnicos.component.html',
  styleUrls: ['./tecnicos.component.css']
})
export class TecnicosComponent implements OnInit {

  public titulo: string = 'Listado de Tecnicos';
  public tecnicos!: Tecnico[];

  constructor(private service: TecnicosService) {}

  ngOnInit(){
    //abreviado cuando dentro de la expresion landa "observador" tiene una sola instruccion
    this.service.listar().subscribe(tecnicos => this.tecnicos = tecnicos);
    //Cuando tenga mas de una instruccion usar llaves
    // this.service.listar().subscribe(tecnicos => {
    //   this.tecnicos = tecnicos;
    // })
  }

}
