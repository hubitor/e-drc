import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the Http Module and our Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

import { DataTablesModule } from 'angular-datatables';
import { AngularWayComponent } from './angular-way/angular-way.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularWayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,             // <-Add HttpModule
    DataTablesModule
  ],
  providers: [DataService], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }
