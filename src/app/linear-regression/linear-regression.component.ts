import { Component, OnInit } from '@angular/core';
import { LinearRegressionService } from '../services/linear-regression.service';
import { MediaComponent } from '../media/media.component';
import { sumaX, sumaYY, sumaXY } from "../common/calculate";

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent implements OnInit {
  constructor(
    private serviceTester: LinearRegressionService,
    private compoMedia: MediaComponent,
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
    // Se obtienen los datos de prueba 1
    this.serviceTester.getData1().subscribe((data: any) => {
      this.test1x = data.proxy_size;
      this.test1y = data.actual_added;
    })

    // Se obtienen los datos de prueba 2
    this.serviceTester.getData2().subscribe((data: any) => {
      this.test2x = data.proxy_size;
      this.test2y = data.actual_develop;
    })

    // Se obtienen los datos de prueba 3
    this.serviceTester.getData3().subscribe((data: any) => {
      this.test3x = data.plan_added;
      this.test3y = data.actual_added;
    })

    // Se obtienen los datos de prueba 4
    this.serviceTester.getData4().subscribe((data: any) => {
      this.test4x = data.plan_added;
      this.test4y = data.actual_develop;
    })
  }

  // Función para calcular la pendiente 'b1'
  calcularb1(xValues: number[], yValues: number[]): number {
    // Se calcula la suma de los productos de cada valor de x con su correspondiente valor de y
    const sumXY = sumaXY(xValues, yValues);
    // Se calcula la suma de los cuadrados de cada valor de x
    const sumXX = sumaYY(xValues);
    // Se calcula la media de los valores de x
    const meanX = this.compoMedia.calcularMedia(xValues);
    // Se calcula la media de los valores de y
    const meanY = this.compoMedia.calcularMedia(yValues);

    // Se calcula la pendiente 'b1' utilizando las fórmulas correspondientes
    return (sumXY - xValues.length * meanX * meanY) / (sumXX - xValues.length * meanX * meanX);
  }

  // Función para calcular la ordenada al origen 'b0'
  calcularb0(x: number[], y: number[]): number {
    // Se calcula la media de los valores de x
    let xMean = this.compoMedia.calcularMedia(x);
    // Se calcula la media de los valores de y
    let yMean = this.compoMedia.calcularMedia(y)
    // Se calcula la pendiente 'b1'
    let b = this.calcularb1(x, y)

    // Se calcula la ordenada al origen 'b0' utilizando las fórmulas correspondientes
    return yMean - b * xMean;
  }

  // Función para calcular la predicción
  calculoPrediction(data: number, x: number[], y: number[]): number {
    // Se calcula la ordenada al origen 'b0'
    let b0 = this.calcularb0(x, y);
    // Se calcula la pendiente 'b1'
    let b1 = this.calcularb1(x, y)
    // Se calcula la predicción utilizando las fórmulas correspondientes
    let yk = (b0 + b1 * data)
    return yk
  }
}