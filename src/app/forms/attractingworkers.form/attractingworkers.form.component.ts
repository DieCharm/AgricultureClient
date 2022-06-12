import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {AttractingWorkers} from "../../../models/attractingWorkers";

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
}
