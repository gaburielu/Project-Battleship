const { ship } = require("../ship.js");

test("Return ship with hit and sunked function working", () => {
  let galley = new ship(2);
  galley.hit();

  expect(galley.hitpoint).toBe(1);
  expect(galley.sunk).toBe(false);
  galley.hit();
  expect(galley.length).toBe(2);
  expect(galley.sunk).toBe(true);
});
