// Generated by https://quicktype.io

export interface PersonaPost {
  nombre:       string;
  email:        string;
  departamento: DepartamentoPost;
}

export interface DepartamentoPost {
  id: number;
}


export interface PersonaGet {
  id:     number;
  nombre: string;
  email:  string;
  area:   string;
}


export interface Departamento {
  id:                number;
  nombre:            string;
  cantidadEmpleados: number;
  listaEmpleados:    ListaEmpleado[] | null;
}

export interface ListaEmpleado {
  id:     number;
  nombre: string;
  email:  string;
  area:   string;
}
