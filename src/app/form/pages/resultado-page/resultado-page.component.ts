import { Component } from '@angular/core';
import { FormularioService } from '../../services/formularioService.service';
import { Departamento } from '../../interfaces/form.interface';

@Component({
  selector: 'form-resultado-page',
  templateUrl: './resultado-page.component.html',
  styleUrls: ['./resultado-page.component.css']
})
export class ResultadoPageComponent {
  constructor(
    private formService: FormularioService
  ){}

  get listaDepartamentos(): Departamento[] {
    return this.formService.departamentosList;
  }

  ngOnInit() {
    this.formService.getDepartamentos();
  }
}
