import {Component, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {Crop} from "../../../models/crop";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'crop-form',
  templateUrl: './crop.form.component.html',
  styleUrls: ['../form.base.css']
})
export class CropFormComponent implements OnInit, OnDestroy{

  onSubmit = new EventEmitter();
  onEdit: Observable<void> = new Observable<void>();
  editSubscription: Subscription = new Subscription();

  constructor(public httpService: HttpService) {}

  inputModel = this.httpService.model as Crop;

  ngOnInit(): void {
    this.editSubscription = this.onEdit.subscribe(() => {
      this.inputModel = this.httpService.model as Crop;
    });
  }

  ngOnDestroy(): void {
    if (this.editSubscription)
    {
      this.editSubscription.unsubscribe();
    }
  }

  submit() {
    this.httpService.model = this.inputModel;
    this.onSubmit.emit();
    this.httpService.model = new Crop();
    this.inputModel = this.httpService.model as Crop;
  }
}
