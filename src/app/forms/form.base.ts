import {Directive, EventEmitter, Injectable, OnDestroy, OnInit} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import {HttpService} from "../../services/http.service";
import {Crop} from "../../models/crop";

@Injectable()
@Directive()
export abstract class FormBase<T> implements OnInit, OnDestroy {

  constructor(public httpService: HttpService) {}

  onSubmit = new EventEmitter();
  onEdit: Observable<void> = new Observable<void>();
  editSubscription: Subscription = new Subscription();
  inputModel = this.httpService.model as unknown as T;

  ngOnInit(): void {
    this.editSubscription = this.onEdit.subscribe(() => {
      console.log("edit");
      this.inputModel = this.httpService.model as unknown as T;
      console.log(this.inputModel);
    });
  }

  ngOnDestroy(): void {
    if (this.editSubscription)
    {
      this.editSubscription.unsubscribe();
    }
  }

  submit() {
    this.httpService.model = this.inputModel as unknown as object;
    this.onSubmit.emit();
    this.httpService.model = new Crop();
    this.inputModel = this.httpService.model as unknown as T;
  }

}
