import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'table-list',
  templateUrl: './table.list.component.html',
  styleUrls: ['./table.list.component.css']
})
export class TableListComponent implements OnChanges{

  @Input() array: object[] = [];
  @Output() onDelete = new EventEmitter<number>();
  forTable: any[][] = [];
  tableHeaders: string[] = [];

  constructor(public httpService: HttpService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.forTable.splice(0);

    for (let i = 0; i < this.array.length; i++) {
      this.forTable.push(Object.values(this.array[i]));
    }

    this.tableHeaders.splice(0);
    var keys = Object.keys(this.httpService.model);

    for (let i = 0; i < keys.length; i++)
    {
      this.tableHeaders.push(keys[i]
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function(str){ return str.toUpperCase(); }));
    }
  }

  delete(id: number) {
    if (confirm("sure to delete?"))
    {
      this.onDelete.emit(id);
    }
  }

  update() {

  }
}
