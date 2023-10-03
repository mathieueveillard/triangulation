import distance from ".";

test("Separation", () => {
  expect(distance(0, 0)).toEqual(0);
});

test("Take 'to' into account", () => {
  expect(distance(0, 1)).toEqual(1);
});

test("Take 'from' into account", () => {
  expect(distance(-1, 1)).toEqual(2);
});

test("Symetry", () => {
  expect(distance(0, -1)).toEqual(1);
});

test("[Triangulation] Symetry", () => {
  expect(distance(0, -2)).toEqual(2);
});
