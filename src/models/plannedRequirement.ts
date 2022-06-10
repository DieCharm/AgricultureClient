export class PlannedRequirement {
  Id: number;
  OperationId: number;
  MaterialName: string;
  MaterialPricePerUnit: number;
  Quantity: number;
  constructor() {
    this.Id = 0;
    this.OperationId = 0;
    this.MaterialName = '';
    this.MaterialPricePerUnit = 0;
    this.Quantity = 0;
  }
}
