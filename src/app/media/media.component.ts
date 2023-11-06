import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor(
    private serviceDev: MediaService,
    private serviceProxy: MediaService
  ) { }

  averageDev: number[] = []
  averageProxy: number[] = []

  ngOnInit(): void {
    this.serviceDev.getDevHours().subscribe((data: any) => {
      this.averageDev = data.data;
    })
    this.serviceProxy.getProxySize().subscribe((data: any) => {
      this.averageProxy = data.data;
    })

  }

  calcularMedia(datos: number[]) {
    console.log(datos)
    if (datos.length === 0) {
      throw new Error("El array de datos no puede estar vacío");
    }

    const suma = datos.reduce((total, valor) => total + valor, 0);
    const media = suma / datos.length;

    return Number(media.toFixed(2));
  }
}