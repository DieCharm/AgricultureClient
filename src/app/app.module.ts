import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {TableListComponent} from './table.list/table.list.component';
import {MDBRootModule} from 'angular-bootstrap-md';
import { CropFormComponent } from './forms/crop.form/crop.form.component';

const routes: Routes = [
  {path: 'crop', component: AppComponent},
  {path: 'incomeandexpenses', component: AppComponent},
  {path: 'field', component: AppComponent},
  {path: 'salesinvoice', component: AppComponent},
  {path: 'operation', component: AppComponent},
  {path: 'waybill', component: AppComponent},
  {path: 'requirement', component: AppComponent},
  {path: 'order', component: AppComponent},
  {path: 'attractingworker', component: AppComponent},
  {path: 'qualification', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    CropFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MDBRootModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
