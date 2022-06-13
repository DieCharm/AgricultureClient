import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MDBRootModule} from 'angular-bootstrap-md';
import { CropFormComponent } from './forms/crop.form/crop.form.component';
import { IncomeandexpensesFormComponent } from './forms/incomeandexpenses.form/incomeandexpenses.form.component';
import { FieldFormComponent } from './forms/field.form/field.form.component';
import { SalesinvoiceFormComponent } from './forms/salesinvoice.form/salesinvoice.form.component';
import { TechnologicaloperationFormComponent } from './forms/technologicaloperation.form/technologicaloperation.form.component';
import { PlannedwaybillFormComponent } from './forms/plannedwaybill.form/plannedwaybill.form.component';
import { RequirementFormComponent } from './forms/requirement.form/requirement.form.component';
import { WorkorderFormComponent } from './forms/workorder.form/workorder.form.component';
import { AttractingworkersFormComponent } from './forms/attractingworkers.form/attractingworkers.form.component';
import { QualificationFormComponent } from './forms/qualification.form/qualification.form.component';
import { CrudComponent } from './crud/crud.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'crud', component: CrudComponent, children: [
      {path: 'crop', component: CropFormComponent},
      {path: 'incomeandexpenses', component: IncomeandexpensesFormComponent},
      {path: 'field', component: FieldFormComponent},
      {path: 'salesinvoice', component: SalesinvoiceFormComponent},
      {path: 'operation', component: TechnologicaloperationFormComponent},
      {path: 'waybill', component: PlannedwaybillFormComponent},
      {path: 'requirement', component: RequirementFormComponent},
      {path: 'order', component: WorkorderFormComponent},
      {path: 'attractingworker', component: AttractingworkersFormComponent},
      {path: 'qualification', component: QualificationFormComponent}
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    CropFormComponent,
    IncomeandexpensesFormComponent,
    FieldFormComponent,
    SalesinvoiceFormComponent,
    TechnologicaloperationFormComponent,
    PlannedwaybillFormComponent,
    RequirementFormComponent,
    WorkorderFormComponent,
    AttractingworkersFormComponent,
    QualificationFormComponent,
    CrudComponent,
    AboutComponent
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
