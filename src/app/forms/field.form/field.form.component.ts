import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {WorkerQualification} from "../../../models/workerQualification";
import {Field} from "../../../models/field";

@Component({
  selector: 'app-field.form',
  templateUrl: './field.form.component.html',
  styleUrls: ['../form.base.css']
})
export class FieldFormComponent
  extends FormBase<Field>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }
}
