import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { FormularioService } from "./formularioService.service"
import { TestBed } from "@angular/core/testing"
import { HttpClientModule } from "@angular/common/http";

describe("Formulario Service", ()=> {
  let service: FormularioService;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(FormularioService);
  });

  it("should be created", ()=> {
    expect(service).toBeTruthy();
  });

  it("should be return name from Marketing", (done)=>{

    const expectedResponse = {
      "id": 1,
      "nombre": "Marketing",
      "cantidadEmpleados": 0,
      "listaEmpleados": []
  }
    service.getDepartamentoPorId(1).subscribe(res=> {
      // Debe ser Departamento de Marketing
      expect(res).toEqual(expectedResponse);
      done();
    })
  })

  it("should return Informática", (done)=>{
    // Debe ser el nombre Informatica
    service.getDepartamentoPorId(2).subscribe(res=> {
      expect(res.nombre).toEqual("Informática")
      done();
    })
  })

  it("should be null", (done)=>{
    // el ID 999 no existe
    service.getDepartamentoPorId(999).subscribe(res=> {
      expect(res).toBeNull()
      done();
    })
  })

})
