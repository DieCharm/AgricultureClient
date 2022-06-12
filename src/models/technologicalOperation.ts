export class TechnologicalOperation {
  id: number;
  cropId: number;
  operationName: string;
  processingOfOneHectareDuration: number;
  constructor() {
    this.id = 0;
    this.cropId = 0;
    this.operationName = '';
    this.processingOfOneHectareDuration = 0;
  }
}
