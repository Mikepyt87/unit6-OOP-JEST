import Vehicle from "./Vehicle";

export function describeVehicleXPosition(vehicle: Vehicle) {
  return `This vehicle is at X pisition ${vehicle.xPosition}`;
}

export function moveVehicleForward(vehicles: Vehicle[], distance: number) {
  for (const vehicle of vehicles) {
    vehicle.moveForward(distance);
  }
}
