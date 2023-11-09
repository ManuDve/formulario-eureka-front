import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as customValidators from 'src/app/shared/validators/validators';
import { Departamento, PersonaPost } from '../../interfaces/form.interface';
import { FormularioService } from '../../services/formularioService.service';


@Component({
  selector: 'form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent {
  public personaForm: FormGroup = this.fb.group({
    nombre:   ['', [Validators.required, Validators.minLength(3)]],
    correo:  ['', [Validators.required, Validators.pattern(customValidators.patronEmail)]],
    identificador: ['']
  });

  private departamentos: Departamento[] = [];

  isValidField(field:string): boolean | null{
    return !this.personaForm.controls[field].errors && !this.personaForm.controls[field].pristine
  }

  getFieldError(field:string, error:string) :boolean | null {
    return this.personaForm.controls[field].getError(error)
  }

  constructor (
    private fb: FormBuilder,
    private formularioService: FormularioService,
    ){}

  get listaDepartamentos(): Departamento[] {
    return this.formularioService.departamentosList;
  }

  ngOnInit() {
    this.formularioService.getDepartamentos();
  }

  onSubmit(name: string, correo: string, identificador: number):void {
    if (this.personaForm.invalid) return;
    const nuevaPersona:PersonaPost = {nombre: name, email: correo, departamento: {id: identificador} }
    console.log(nuevaPersona)
    this.formularioService.createPersona(nuevaPersona);
    this.personaForm.reset();
  }
}
