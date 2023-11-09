import { Component, Input, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { Departamento } from '../../interfaces/form.interface';
import { FormularioService } from '../../services/formularioService.service';


@Component({
  selector: 'form-graficos-resultados',
  templateUrl: './graficos-resultados.component.html',
  styleUrls: ['./graficos-resultados.component.css']
})
export class GraficosResultadosComponent {
  public chart: any;
  @Input()
  public departamentos : Departamento[] = [];
  constructor(
    private formularioService: FormularioService
  ){}


  createChart(){

    let labelsName = this.departamentos.map(x=> x.nombre)
    let dataSets = this.departamentos.map(x=> x.cantidadEmpleados)

    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: labelsName,
	      datasets: [{
          label: 'Cantidad de Empleados',
          data: dataSets,
          borderWidth: 1
        }]
      },
      options: {
        layout: {
          padding: 30
        },
        aspectRatio: 3/1,
        plugins: {  // 'legend' now within object 'plugins {}'
          legend: {
            display: false,
            labels: {
              color: "white",
            }
          },
          tooltip: {
            padding: 20
          }
        },
        scales: {
          y: {
              ticks: {
                color: "white",
                stepSize: 1,
                padding: 10
              },
          },
          x: {
            ticks: {
              color: "white",
              padding: 10
            },
        }
      }
      }

    });
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['departamentos'].previousValue) {
      console.log(changes['departamentos'].currentValue)
      this.createChart();
    }
  }
}
