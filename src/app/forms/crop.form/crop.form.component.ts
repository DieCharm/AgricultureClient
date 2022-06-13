import {Component, OnDestroy, OnInit} from '@angular/core';
import {Crop} from "../../../models/crop";
import {FormBase} from "../form.base";

@Component({
  selector: 'crop-form',
  templateUrl: './crop.form.component.html',
  styleUrls: ['../form.base.css']
})
export class CropFormComponent
  extends FormBase<Crop>
  implements OnInit, OnDestroy
{
  override ngOnInit() {
    super.ngOnInit();
  }
  override ngOnDestroy() {
    super.ngOnDestroy();
  }

  renewModel(): void {
    this.httpService.model = new Crop();
    this.inputModel = this.httpService.model as unknown as Crop;
  }
}



