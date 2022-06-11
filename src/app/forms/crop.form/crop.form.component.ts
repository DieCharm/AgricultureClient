import {Component, EventEmitter, OnInit} from '@angular/core';
import {HttpService} from "../../../services/http.service";
import {Crop} from "../../../models/crop";

@Component({
  selector: 'crop-form',
  templateUrl: './crop.form.component.html',
  styleUrls: ['./crop.form.component.css']
})
export class CropFormComponent implements OnInit {

  onSubmit = new EventEmitter();
  inputModel = new Crop();

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
  }

  submit() {
    this.httpService.model = this.inputModel;
    this.onSubmit.emit();
    console.log("form");
    console.log(this.httpService.model);
  }
}
