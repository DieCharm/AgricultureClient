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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPath: string = "";
  array:object[] = [];
  keys: string[] = [];
  model: object = { };

  constructor(private httpService: HttpService) { }

  initializePage(path: string) {
    this.currentPath = environment.serverLink + "/" + path;
    switch (path) {
      case 'crop':
        this.model = new Crop();
        break;
      case 'field':
        this.model = new Field();
        break;
      case 'incomeandexpenses':
        this.model = new IncomeAndExpenses();
        break;
      case 'salesinvoice':
        this.model = new SalesInvoice();
        break;
      case 'operation':
        this.model = new TechnologicalOperation();
        break;
      case 'waybill':
        this.model = new PlannedWaybill();
        break;
      case 'requirement':
        this.model = new PlannedRequirement();
        break;
      case 'order':
        this.model = new WorkOrder();
        break;
      case 'attractingworkers':
        this.model = new AttractingWorkers();
        break;
      case 'qualification':
        this.model = new WorkerQualification();
        break;
    }
    this.keys = Object.keys(this.model);
    this.get();
  }

  get() {
    this.httpService.get(this.currentPath)
      .toPromise()
      .then(result =>
      {
        !(result === undefined) ?
          this.array = result as object[]
          : this.array = [];
      });
  }

  post(target: object) {
    this.httpService.post(this.currentPath, target);
  }

  delete(id: number) {
    this.httpService.delete(this.currentPath, id);
  }
}
