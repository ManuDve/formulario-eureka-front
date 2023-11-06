import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuInicioComponent } from './form/components/menu-inicio/menu-inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: MenuInicioComponent
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
