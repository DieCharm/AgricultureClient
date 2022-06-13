import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {IncomeAndExpenses} from "../../../models/incomeAndExpenses";

@Component({
  selector: 'app-incomeandexpenses.form',
  templateUrl: './incomeandexpenses.form.component.html',
  styleUrls: ['../form.base.css']
})
export class IncomeandexpensesFormComponent
  extends FormBase<IncomeAndExpenses>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }

  renewModel(): void {
    this.httpService.model = new IncomeAndExpenses();
    this.inputModel = this.httpService.model as unknown as IncomeAndExpenses;
  }
}
