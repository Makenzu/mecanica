import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicosComponent } from './components/tecnicos/tecnicos.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:''},
  {path: 'tecnicos',    component: TecnicosComponent},
  {path: 'vehiculos',   component: VehiculosComponent},
  {path: 'actividades', component: ActividadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
