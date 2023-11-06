import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private readonly http: HttpClient
  ) { }

  apiURLDevHours = 'https://deploy-service-lord17charly.cloud.okteto.net/hours'
  apiURLProxySize = 'https://deploy-service-lord17charly.cloud.okteto.net/size'


  //http opcions

  httpOpcions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getDevHours(): Observable<any> {
    return this.http.get<any>(this.apiURLDevHours, this.httpOpcions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getProxySize(): Observable<any> {
    return this.http.get<any>(this.apiURLProxySize, this.httpOpcions).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code ${error.status} Mensage: ${error.message}`
    }
    window.alert(errorMessage)
    return throwError(errorMessage)
  }
}