import { Component } from '@angular/core';
import { MediaComponent } from "../media/media.component";
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-stddev',
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css']
})
export class StddevComponent {

  constructor(
    private compMedia: MediaComponent,
    private serviceDev: MediaService,
  ) { }

  averageDev: number[] = []
  averageProxy: number[] = []

  ngOnInit(): void {
    this.serviceDev.getDevHours().subscribe((data: any) => {
      this.averageDev = data.data;
    })
    this.serviceDev.getProxySize().subscribe((data: any) => {
      this.averageProxy = data.data;
    })

  }
  calcularDesviacionEstandar(data: number[]): number {
    if (!data || data.length === 0) return 0;

    const mean = this.compMedia.calcularMedia(data)
    const squaredDifferences = data.map((val) => Math.pow(val - mean, 2));
    const variance =
      squaredDifferences.reduce((acc, val) => acc + val, 0) / data.length;
    return Math.sqrt(variance);
  }
}