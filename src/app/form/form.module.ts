import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuInicioComponent } from './components/menu-inicio/menu-inicio.component';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { TablaResultadosComponent } from './components/tabla-resultados/tabla-resultados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultadoPageComponent } from './pages/resultado-page/resultado-page.component';
import { GraficosResultadosComponent } from './components/graficos-resultados/graficos-resultados.component';

@NgModule({
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  exports: [MenuInicioComponent, FormPersonaComponent, TablaResultadosComponent],
  declarations: [MenuInicioComponent, FormPersonaComponent, TablaResultadosComponent, ResultadoPageComponent, GraficosResultadosComponent],
  providers: [],
})
export class FormModule {
}
