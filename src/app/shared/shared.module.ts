import { NgModule } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { AcercaPageComponent } from './pages/acerca-page/acerca-page.component';

@NgModule({
  imports: [RouterModule],
  exports: [NavBarComponent],
  declarations: [NavBarComponent, AcercaPageComponent],
  providers: [],
})
export class SharedModule { }
