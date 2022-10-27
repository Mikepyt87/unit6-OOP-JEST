import AirVehicle from "../src/AirVehicle";
import { describeVehicleXPosition } from "../src/functions";
import Vehicle from "../src/Vehicle";

describe("describeVehicleXPosition function", () => {
  test(`Create an instance of a Vehicle. A new Vehicle should start at xPosition 0, so call describeVehicleXPosition with that vehicle and expect it to return "This vehicle is at X position 0."`, () => {
    let vehicle = new Vehicle();
    describeVehicleXPosition(vehicle);
    expect("This vehicle is at X position 0.");
  });
});

describe("moveVehiclesForward function", () => {
  test("Create one array that contains one Vehicle and one AirVehicle. Pass this to the moveVehiclesForward function. Confirm that both vehicles have xPosition increased by the given distance.", () => {
    const vehicles: Vehicle[] = [new Vehicle(), new AirVehicle(2)];
    vehicles[0].moveForward(5);
    vehicles[1].moveForward(8);
    expect(vehicles[0].xPosition).toBe(5);
    expect(vehicles[1].xPosition).toBe(10);
  });
});
