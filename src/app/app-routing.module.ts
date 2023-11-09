import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicioComponent } from './form/components/menu-inicio/menu-inicio.component';
import { FormPersonaComponent } from './form/components/form-persona/form-persona.component';
import { AcercaPageComponent } from './shared/pages/acerca-page/acerca-page.component';
import { ResultadoPageComponent } from './form/pages/resultado-page/resultado-page.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: MenuInicioComponent
  },
  {
    path: 'registro',
    component: FormPersonaComponent
  },
  {
    path: 'acerca',
    component: AcercaPageComponent
  },
  {
    path: 'resultados',
    component: ResultadoPageComponent
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
