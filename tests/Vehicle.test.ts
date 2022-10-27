import Vehicle from "../src/Vehicle";

describe("Vehicle class", () => {
  test("Confirm that a new instance of Vehicle has xPosition set to 0. (Remember the constructor has no parameters.)", () => {
    const vehicle = new Vehicle();
    expect(vehicle.xPosition).toBe(0);
  });

  test("Calling moveForward once increases the xPosition by the given distance", () => {
    const vehicle = new Vehicle();
    vehicle.moveForward(5);
    expect(vehicle.xPosition).toBe(5);
  });

  test("Calling moveForward once increases the xPosition by the given distance", () => {
    const vehicle = new Vehicle();
    vehicle.moveForward(5);
    vehicle.moveForward(5);
    expect(vehicle.xPosition).toBe(10);
  });
});
