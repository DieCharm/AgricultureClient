export class WorkOrder {
  id: number;
  operationId: number;
  workType: string;
  completionTime: number;
  constructor() {
    this.id = 0;
    this.operationId = 0;
    this.workType = '';
    this.completionTime = 0;
  }
}
