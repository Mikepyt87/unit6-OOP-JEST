export default interface ShippingContainer {
  destination: string;
  cargoWeight: number;
  // method **note syntax
  getGrossWeight: () => number;
}
