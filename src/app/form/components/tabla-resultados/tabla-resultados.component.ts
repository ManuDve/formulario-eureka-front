import { Component, Input } from '@angular/core';
import { Departamento } from '../../interfaces/form.interface';

@Component({
  selector: 'form-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styleUrls: ['./tabla-resultados.component.css']
})
export class TablaResultadosComponent {
  @Input()
  public departamentos : Departamento[] = [];
}
