export class PlannedWaybill {
  id: number;
  operationId: number;
  carName: string;
  workTime: Date;
  fuelConsumptionPerAreaUnit: number;
  constructor() {
    this.id = 0;
    this.operationId = 0;
    this.carName = '';
    this.workTime = new Date();
    this.fuelConsumptionPerAreaUnit = 0;
  }
}
