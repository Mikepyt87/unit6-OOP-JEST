import ShippingContainer from "./ShippingContainer";
import Transporter from "./Transporter";

export default class Truck implements Transporter {
  maxWeight: number;
  container: ShippingContainer | null = null;
  constructor(mW: number) {
    this.maxWeight = mW;
  }
  addContainer(c: ShippingContainer): void {
    this.container = c;
  }
  getTotalWeight(): number {
    if (this.container !== null) {
      // this is an obj - so we can use its method
      // this . object . method ****
      return this.container.getGrossWeight();
    } else {
      // shipping container not on Truck
      // can't call getGroodWeight on null value
      return 0;
    }
  }
  isOverweight(): boolean {
    const totalW: number = this.getTotalWeight();
    if (totalW > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  }
}
