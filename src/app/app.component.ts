import { Component } from '@angular/core';
import { HttpService } from "../services/http.service";
import { environment } from "../environments/environment";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { Crop } from "../models/crop";
import {Field} from "../models/field";
import {IncomeAndExpenses} from "../models/incomeAndExpenses";
import {SalesInvoice} from "../models/salesInvoice";
import {TechnologicalOperation} from "../models/technologicalOperation";
import {PlannedWaybill} from "../models/plannedWaybill";
import {PlannedRequirement} from "../models/plannedRequirement";
import {WorkOrder} from "../models/workOrder";
import {AttractingWorkers} from "../models/attractingWorkers";
import {WorkerQualification} from "../models/workerQualification";
import {Subscription} from "rxjs";
import {CropFormComponent} from "./forms/crop.form/crop.form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPath: string = "";
  array: object[] = [];
  subscription: Subscription = new Subscription();

  constructor(public httpService: HttpService) { }

  initializePage(path: string) {
    this.currentPath = environment.serverLink + "/" + path;

    switch (path) {
      case 'crop':
        this.httpService.model = new Crop();
        break;
      case 'field':
        this.httpService.model = new Field();
        break;
      case 'incomeandexpenses':
        this.httpService.model = new IncomeAndExpenses();
        break;
      case 'salesinvoice':
        this.httpService.model = new SalesInvoice();
        break;
      case 'operation':
        this.httpService.model = new TechnologicalOperation();
        break;
      case 'waybill':
        this.httpService.model = new PlannedWaybill();
        break;
      case 'requirement':
        this.httpService.model = new PlannedRequirement();
        break;
      case 'order':
        this.httpService.model = new WorkOrder();
        break;
      case 'attractingworker':
        this.httpService.model = new AttractingWorkers();
        break;
      case 'qualification':
        this.httpService.model = new WorkerQualification();
        break;
    }
    this.get();
  }

  get() {
    console.log("getting...");
    this.httpService.get(this.currentPath)
      .toPromise()
      .then(result =>
      {
        !(result === undefined) ?
          this.array = result as object[]
          : this.array = [];
      });
  }

  subscribeToForm(formComponent: any) {
    formComponent.onSubmit.subscribe(() => {
      this.httpService.post(this.currentPath);
      this.get();
    });
  }

  unsubscribe() {
    if (this.subscription)
    {
      this.subscription.unsubscribe();
    }
  }

  delete(id: number) {
    this.httpService.delete(this.currentPath, id);
    this.get();
  }
}
