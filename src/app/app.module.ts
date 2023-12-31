import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StddevComponent } from './stddev/stddev.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';

@NgModule({
  declarations: [
    AppComponent,
    StddevComponent,
    LinearRegressionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
