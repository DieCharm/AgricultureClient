import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {WorkerQualification} from "../../../models/workerQualification";
import {PlannedWaybill} from "../../../models/plannedWaybill";
import {Crop} from "../../../models/crop";

@Component({
  selector: 'app-qualification.form',
  templateUrl: './qualification.form.component.html',
  styleUrls: ['../form.base.css']
})

export class QualificationFormComponent
  extends FormBase<WorkerQualification>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }

  renewModel(): void {
    this.httpService.model = new WorkerQualification();
    this.inputModel = this.httpService.model as unknown as WorkerQualification;
  }
}
