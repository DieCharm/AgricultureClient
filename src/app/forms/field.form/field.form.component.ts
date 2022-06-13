import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {WorkerQualification} from "../../../models/workerQualification";
import {Field} from "../../../models/field";
import {Crop} from "../../../models/crop";

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

  renewModel(): void {
    this.httpService.model = new Field();
    this.inputModel = this.httpService.model as unknown as Field;
  }
}
