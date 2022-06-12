import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {Field} from "../../../models/field";
import {PlannedWaybill} from "../../../models/plannedWaybill";

@Component({
  selector: 'app-plannedwaybill.form',
  templateUrl: './plannedwaybill.form.component.html',
  styleUrls: ['../form.base.css']
})
export class PlannedwaybillFormComponent
  extends FormBase<PlannedWaybill>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }
}
