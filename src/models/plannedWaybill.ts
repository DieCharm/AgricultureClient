export class PlannedWaybill {
  Id: number;
  OperationId: number;
  CarName: string;
  WorkTime: Date;
  FuelConsumptionPerAreaUnit: number;
  constructor() {
    this.Id = 0;
    this.OperationId = 0;
    this.CarName = '';
    this.WorkTime = new Date();
    this.FuelConsumptionPerAreaUnit = 0;
  }
}
