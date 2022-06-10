export class TechnologicalOperation {
  Id: number;
  CropId: number;
  OperationName: string;
  ProcessingOfOneHectareDuration: number;
  constructor() {
    this.Id = 0;
    this.CropId = 0;
    this.OperationName = '';
    this.ProcessingOfOneHectareDuration = 0;
  }
}
