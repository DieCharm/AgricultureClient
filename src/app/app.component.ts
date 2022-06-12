import { Component } from '@angular/core';
import { HttpService } from "../services/http.service";
import { environment } from "../environments/environment";
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
import {Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPath: string = "";
  array: object[] = [];
  forTable: any[][] = [];
  tableHeaders: string[] = [];
  subscription: Subscription = new Subscription();
  editSubject: Subject<void> = new Subject<void>();

  constructor(public httpService: HttpService) { }

  initializePage(path: string) {
    this.currentPath = environment.serverLink + "/" + path;

    switch (path) {
      case 'crop':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Crops";
          this.httpService.model = new Crop();
        break;
      case 'field':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Fields";
        this.httpService.model = new Field();
        break;
      case 'incomeandexpenses':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Crop Incomes and Expenses";
        this.httpService.model = new IncomeAndExpenses();
        break;
      case 'salesinvoice':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Sales Invoices";
        this.httpService.model = new SalesInvoice();
        break;
      case 'operation':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Technological Operations";
        this.httpService.model = new TechnologicalOperation();
        break;
      case 'waybill':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Planned Waybills";
        this.httpService.model = new PlannedWaybill();
        break;
      case 'requirement':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Planned Requirements";
        this.httpService.model = new PlannedRequirement();
        break;
      case 'order':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Work Orders";
        this.httpService.model = new WorkOrder();
        break;
      case 'attractingworker':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Attracting Workers";
        this.httpService.model = new AttractingWorkers();
        break;
      case 'qualification':
        // @ts-ignore
        document.getElementById('table-name').innerText = "Worker Qualifications";
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

        this.forTable.splice(0);

        for (let i = 0; i < this.array.length; i++) {
          this.forTable.push(Object.values(this.array[i]));
        }

        this.tableHeaders.splice(0);
        var keys = Object.keys(this.httpService.model);

        for (let i = 0; i < keys.length; i++)
        {
          this.tableHeaders.push(keys[i]
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, function(str){ return str.toUpperCase(); }));
        }
      });
  }

  delete(id: number) {
    if (confirm("sure to delete?"))
    {
      this.httpService.delete(this.currentPath, id)
        .toPromise()
        .then(result => {
          console.log(result);
          this.get();
        });
    }
  }

  edit(id: number) {
    this.httpService.model = this.array[id];
    this.editSubject.next();
  }

  subscribeToForm(formComponent: any) {
    formComponent.onSubmit.subscribe(() => {
      this.httpService.post(this.currentPath)
        .toPromise()
        .then((posted) => {
          this.get();
        })
        .catch((error) => {
          alert("error while posting");
      });
    });
    formComponent.onEdit = this.editSubject.asObservable();
  }

  unsubscribe() {
    if (this.subscription)
    {
      this.subscription.unsubscribe();
    }
  }
}
