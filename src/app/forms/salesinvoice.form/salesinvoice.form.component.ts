import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {SalesInvoice} from "../../../models/salesInvoice";

@Component({
  selector: 'app-salesinvoice.form',
  templateUrl: './salesinvoice.form.component.html',
  styleUrls: ['../form.base.css']
})
export class SalesinvoiceFormComponent
  extends FormBase<SalesInvoice>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }
}
