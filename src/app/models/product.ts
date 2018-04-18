export class Product {
  private id: number;
  private name: string;
  private observation: string;

  constructor(
    id: number,
    name: string,
    observation: string
  ) {
    this.id = id;
    this.name = name;
    this.observation = observation;
  }
}
