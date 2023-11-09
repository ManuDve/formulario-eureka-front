import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento, PersonaGet, PersonaPost } from '../interfaces/form.interface';

@Injectable({providedIn: 'root'})
export class FormularioService {

  public personasList: PersonaGet[] = [];
  public departamentosList: Departamento[] = [];
  private apiPersonasUrl: string = "http://localhost:8080/api/personas"
  private apiDepartamentosUrl: string = "http://localhost:8080/api/departamentos"

  constructor(private http: HttpClient) { }

  getPersonas():void {
    this.http.get<PersonaGet[]>(this.apiPersonasUrl)
    .subscribe(
      r => {
        this.personasList = r;
      }
    )
  }

  getDepartamentoPorId(id: Number) {
    return this.http.get<Departamento>(this.apiDepartamentosUrl + `/${id}`)
  }

  getDepartamentos():void {
    this.http.get<Departamento[]>(this.apiDepartamentosUrl)
    .subscribe(
      r => {
        this.departamentosList = r;
      }
    )
  }

  createPersona(body:PersonaPost):void {
    this.http.post<PersonaPost>(this.apiPersonasUrl, body)
    .subscribe({
      error: err => alert("Datos incorrectos, el email está en uso y/o el área no existe"),
      complete:()=> {
        alert(`Se ha creado el usuario ${body.nombre} correctamente`)
        this.getPersonas();
      }
    })
  }






}
