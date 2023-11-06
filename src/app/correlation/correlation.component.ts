import { Component, OnInit } from '@angular/core';
import { sumaX, sumaXY, sumSquared } from "../common/calculate"; // Importar las funciones necesarias para realizar los cálculos.
import { LinearRegressionService } from '../services/linear-regression.service'; // Importar el servicio que proporciona los datos de prueba.

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent implements OnInit {
  constructor(
    private serviceTester: LinearRegressionService, // Inyectar el servicio que proporciona los datos de prueba.

  ) { }

  // Se definen los arrays para almacenar los datos de prueba
  // Se añaden los comentarios para test1x y test1y
  test1x: number[] = []  
  test1y: number[] = []  
  
  // Se añaden los comentarios para test2x y test2y
  test2x: number[] = []  
  test2y: number[] = [] 
  
  // Se añaden los comentarios para test3x y test3y
  test3x: number[] = []  
  test3y: number[] = []  
  
  // Se añaden los comentarios para test4x y test4y
  test4x: number[] = []  
  test4y: number[] = []  

  ngOnInit(): void {
    // Obtener los datos de prueba utilizando el servicio inyectado.
    this.serviceTester.getData1().subscribe((data: any) => {
      this.test1x = data.proxy_size;
      this.test1y = data.actual_added;
    })

    this.serviceTester.getData2().subscribe((data: any) => {
      this.test2x = data.proxy_size;
      this.test2y = data.actual_develop;
    })

    this.serviceTester.getData3().subscribe((data: any) => {
      this.test3x = data.plan_added;
      this.test3y = data.actual_added;
    })

    this.serviceTester.getData4().subscribe((data: any) => {
      this.test4x = data.plan_added;
      this.test4y = data.actual_develop;
    })

  }

  // Función para calcular el coeficiente de correlación entre dos arreglos de números.
  correlationCoefficient(x: number[], y: number[]): number {
    if (x.length !== y.length || x.length === 0) {
      throw new Error("Los arreglos deben tener la misma longitud y no pueden estar vacíos");
    }

    const n = x.length;
    const sumXValue = sumaX(x);
    const sumYValue = sumaX(y);
    const sumXYValue = sumaXY(x, y);
    const sumXSquared = sumSquared(x);
    const sumYSquared = sumSquared(y);

    const numerator = n * sumXYValue - sumXValue * sumYValue;
    const denominator = Math.sqrt((n * sumXSquared - sumXValue * sumXValue) * (n * sumYSquared - sumYValue * sumYValue));

    if (denominator === 0) {
      return 0; // Evitar la división por cero.
    }

    const r = numerator / denominator;
    return r;
  }

  // Función para calcular el coeficiente de determinación (r cuadrada) entre dos arreglos de números.
  rcuadrada(x: number[], y: number[]): number {
    if (x.length !== y.length || x.length === 0) {
      throw new Error("Los arreglos deben tener la misma longitud y no puede ir el campo vacío");
    }
    return this.correlationCoefficient(x, y) ** 2
  }
}