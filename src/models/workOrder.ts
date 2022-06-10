export class WorkOrder {
  Id: number;
  OperationId: number;
  WorkType: string;
  CompletionTime: number;
  constructor() {
    this.Id = 0;
    this.OperationId = 0;
    this.WorkType = '';
    this.CompletionTime = 0;
  }
}
