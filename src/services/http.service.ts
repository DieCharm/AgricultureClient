import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    return this.httpClient.post<object>(address, this.model);
  }

  delete(address: string, id: number)
  {
    return this.httpClient.delete<object>(address + "/" + id.toString());
  }
}
