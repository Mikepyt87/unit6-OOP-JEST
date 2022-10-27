import AirVehicle from "../src/AirVehicle";
import Vehicle from "../src/Vehicle";

describe("AirVehicle class", () => {
  test("Confirm that a new instance of AirVehicle has yPostition set from the constructor parameter and xPosition set to 0.", () => {
    const container = new AirVehicle(0);
    expect(container.yPostion).toBe(0);
  });

  test("Calling moveUp increases the yPosition by one.", () => {
    const container = new AirVehicle(0);
    container.moveUp();
    expect(container.yPostion).toBe(1);
  });

  test("Calling moveUp increases the yPosition by one.", () => {
    const container = new AirVehicle(10);
    container.moveUp();
    expect(container.yPostion).toBe(10);
  });
});
