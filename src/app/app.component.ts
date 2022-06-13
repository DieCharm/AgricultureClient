import { Component } from '@angular/core';
import {CrudComponent} from "./crud/crud.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  redirectSubject: Subject<string> = new Subject<string>();

  controlCrudComponent(crudComponent: CrudComponent) {
    crudComponent.onRedirect = this.redirectSubject.asObservable();
  }

  initializePage(path: string)
  {
    this.redirectSubject.next(path);
  }
}
