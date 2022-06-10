import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'table-list',
  templateUrl: './table.list.component.html',
  styleUrls: ['./table.list.component.css']
})
export class TableListComponent implements OnChanges {

  constructor() { }

  forTable: any[][] = [];
  tableHeaders: string[] = [];

  @Input() keys: string[] = [];
  @Input() array: object[] = [];

  ngOnChanges(changes: SimpleChanges): void {

    this.forTable.splice(0);

    for (let i = 0; i < this.array.length; i++) {
      this.forTable.push(Object.values(this.array[i]));
    }

    this.tableHeaders.splice(0);

    for (let i = 0; i < this.keys.length; i++)
    {
      this.tableHeaders.push(this.keys[i]
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function(str){ return str.toUpperCase(); }))
    }
  }
}

/*
console.log("array:");
console.log(this.array);
console.log("for table:");
console.log(this.forTable);
*/
