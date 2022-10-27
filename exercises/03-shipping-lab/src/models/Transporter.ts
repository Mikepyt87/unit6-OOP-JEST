import ShippingContainer from "./ShippingContainer";

export default interface Transporter {
  maxWeight: number;
  addContainer: (container: ShippingContainer) => void;
  getTotalWeight: () => number;
  //   isOverWeight: () => boolean;
}
