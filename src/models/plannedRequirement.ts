export class PlannedRequirement {
  id: number;
  operationId: number;
  materialName: string;
  materialPricePerUnit: number;
  quantity: number;
  constructor() {
    this.id = 0;
    this.operationId = 0;
    this.materialName = '';
    this.materialPricePerUnit = 0;
    this.quantity = 0;
  }
}
