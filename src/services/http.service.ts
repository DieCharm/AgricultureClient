import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  model: object = {};

  constructor(private httpClient: HttpClient) { }

  get(address: string) {
    return this.httpClient.get<object[]>(address);
  }

  post(address: string)
  {
    console.log("posting...");
    this.httpClient.post<object>(address, this.model).subscribe(res => {
      console.log(res);
    },
      error => {
      console.log(error);
      });
  }

  delete(address: string, id: number)
  {
    console.log("deleting...");
    console.log(address + "/" + id.toString());
    this.httpClient.delete<object>(address + "/" + id.toString())
      .subscribe(
        res =>
        {
          console.log(res);
        },
        error => {
          console.log(error);
        }
    )
  }
}
