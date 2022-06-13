import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBase} from "../form.base";
import {TechnologicalOperation} from "../../../models/technologicalOperation";
import {Crop} from "../../../models/crop";

@Component({
  selector: 'app-technologicaloperation.form',
  templateUrl: './technologicaloperation.form.component.html',
  styleUrls: ['../form.base.css']
})
export class TechnologicaloperationFormComponent
  extends FormBase<TechnologicalOperation>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }

  renewModel(): void {
    this.httpService.model = new TechnologicalOperation();
    this.inputModel = this.httpService.model as unknown as TechnologicalOperation;
  }
}
