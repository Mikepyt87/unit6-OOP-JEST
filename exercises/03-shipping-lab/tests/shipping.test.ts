import HeavyContainer from "../src/models/HeavyContainer";
import LightContainer from "../src/models/LightContainer";

describe(`LightContainer Class`, () => {
  test(`The destination and cargoWeight properties are set from the constructor parameters.`, () => {
    const container: LightContainer = new LightContainer("Machu Picchu", 100);
    expect(container).toEqual({
      destination: "Machu Picchu",
      cargoWeight: 100,
    });
  });
});

describe(`HeavyContainer Class`, () => {
  test(`The tareWeight, destination, and cargoWeight properties are set from the constructor parameters.`, () => {
    // cargoWeight defaults to 0, when the third constructor parameter is omitted
    const container: HeavyContainer = new HeavyContainer(5000, "Detroit", 3000);
    expect(container).toEqual({
      tareWeight: 5000,
      destination: "Detroit",
      cargoWeight: 3000,
    });
  });
  test(`cargoWeight defaults to 0, when the third constructor parameter is omitted.`, () => {
    // cargoWeight defaults to 0, when the third constructor parameter is omitted
    const container: HeavyContainer = new HeavyContainer(5000, "Detroit");
    expect(container).toEqual({
      tareWeight: 5000,
      destination: "Detroit",
      cargoWeight: 0,
    });
  });
  test(`getGrossWeight returns the tareWeight plus the cargoWeight (write 2 test cases with different tareWeights and cargoWeights)`, () => {
    const container: HeavyContainer = new HeavyContainer(5000, "Detroit");
    container.getGrossWeight();
    expect(container.getGrossWeight()).toBe(5000);
  });
});

// describe(`ship class`, () => {
//   test(`calling addContainer twice adds both containers to the containers array property`, () => {
//     // cargoWeight defaults to 0, when the third constructor parameter is omitted
//     const titanic: Ship = new Ship(52000);
//     const heaveContainer1: HeavyContainer = new HeavyContainer(
//       2000,
//       "NY",
//       10000
//     );
//     const heaveContainer2: HeavyContainer = new HeavyContainer(
//       3000,
//       "NY",
//       15000
//     );
//     titanic.addContainer(heaveContainer1);
//     titanic.addContainer(heaveContainer2);
//     expect(titanic.containers).toEqual([heaveContainer1, heaveContainer2]);
//   });
// });
