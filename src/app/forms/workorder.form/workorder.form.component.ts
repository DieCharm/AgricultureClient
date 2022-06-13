import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {WorkOrder} from "../../../models/workOrder";
import {Crop} from "../../../models/crop";

@Component({
  selector: 'app-workorder.form',
  templateUrl: './workorder.form.component.html',
  styleUrls: ['../form.base.css']
})
export class WorkorderFormComponent
  extends FormBase<WorkOrder>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }

  renewModel(): void {
    this.httpService.model = new WorkOrder();
    this.inputModel = this.httpService.model as unknown as WorkOrder;
  }
}
