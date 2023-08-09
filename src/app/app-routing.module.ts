import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicosComponent } from './components/tecnicos/tecnicos.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { TecnicosFormComponent } from './components/tecnicos/tecnicos-form.component';
import { VehiculosFormComponent } from './components/vehiculos/vehiculos-form.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:''},
  {path: 'tecnicos',            component: TecnicosComponent},
  {path: 'tecnicos/form',       component: TecnicosFormComponent},
  {path: 'tecnicos/form/:id',   component: TecnicosFormComponent},

  {path: 'vehiculos',           component: VehiculosComponent},
  {path: 'vehiculos/form',       component: VehiculosFormComponent},
  {path: 'vehiculos/form/:id',   component: VehiculosFormComponent},
  
  {path: 'actividades',         component: ActividadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
