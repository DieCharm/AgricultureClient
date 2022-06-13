import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {AttractingWorkers} from "../../../models/attractingWorkers";
import {Crop} from "../../../models/crop";

@Component({
  selector: 'app-attractingworkers.form',
  templateUrl: './attractingworkers.form.component.html',
  styleUrls: ['../form.base.css']
})
export class AttractingworkersFormComponent
  extends FormBase<AttractingWorkers>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }

  renewModel(): void {
    this.httpService.model = new AttractingWorkers();
    this.inputModel = this.httpService.model as unknown as AttractingWorkers;
  }
}
