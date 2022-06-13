import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {PlannedRequirement} from "../../../models/plannedRequirement";
import {Crop} from "../../../models/crop";

@Component({
  selector: 'app-requirement.form',
  templateUrl: './requirement.form.component.html',
  styleUrls: ['../form.base.css']
})
export class RequirementFormComponent
  extends FormBase<PlannedRequirement>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }

  renewModel(): void {
    this.httpService.model = new PlannedRequirement();
    this.inputModel = this.httpService.model as unknown as PlannedRequirement;
  }
}
