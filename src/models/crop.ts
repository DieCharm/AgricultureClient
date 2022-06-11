export class Crop {
  id: number;
  cropName: string;
  plannedWeight: number;
  constructor(id: number = 0, name: string = '', weight: number = 0) {
    this.id = id;
    this.cropName = name;
    this.plannedWeight = weight;
  }
}
