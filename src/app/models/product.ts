export class Product {
  constructor(
    public id: number | null,
    public name: string = 'default',
    public price?: number
  ) { }
}
