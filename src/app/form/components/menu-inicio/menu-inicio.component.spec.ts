import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { MenuInicioComponent } from "./menu-inicio.component"
import { ComponentFixture, TestBed } from "@angular/core/testing"

describe("Menu Inicio", ()=>{
  let component: MenuInicioComponent;
  let fixture: ComponentFixture<MenuInicioComponent>;
  let compiled = HTMLElement;

  beforeEach(()=>{

    TestBed.configureTestingModule({
      imports: [],
      declarations: [MenuInicioComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })

  })

  beforeEach(()=> {
    fixture = TestBed.createComponent(MenuInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  })

  it('should create', ()=> {
    expect(component).toBeTruthy;
  })

})
