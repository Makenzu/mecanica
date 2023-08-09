import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecnicosComponent } from './components/tecnicos/tecnicos.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { LayoutModule } from './layout/layout.module';
import { TecnicosFormComponent } from './components/tecnicos/tecnicos-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TecnicosComponent,
    TecnicosFormComponent,
    VehiculosComponent,
    ActividadesComponent,
    TecnicosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
