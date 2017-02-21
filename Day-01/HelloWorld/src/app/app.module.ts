import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/helloWorld.component';
import { ClockComponent } from './clock/clock.component';
import { SalaryCalculatorComponent } from './salary-calculator/salaryCalculator.component';

/*import * as AppStuff from './app.component';
var AppComponent = AppStuff.AppComponent;
var myFn = AppStuff.myFn;*/

//console.log('AppStuff -> ', AppStuff);

@NgModule({
  //components & Pipes
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ClockComponent,
    SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //Services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
