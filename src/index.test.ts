import { range } from "./index";

test("generate array with only end argument", () => {
  const arrEnd = [...range(5)];
  expect(arrEnd).toStrictEqual([0, 1, 2, 3, 4, 5]);
});

test("generate array with end and start arguments", () => {
  const arrStart = [...range(10, 5)];
  expect(arrStart).toStrictEqual([5, 6, 7, 8, 9, 10]);
});

test("generate array with end, start and step arguments", () => {
  const arrStep = [...range(10, 0, 2)];
  expect(arrStep).toStrictEqual([0, 2, 4, 6, 8, 10]);
});

test("generate array with end, start and step arguments, outside the step", () => {
  const arrStep = [...range(11, 0, 2)];
  expect(arrStep).toStrictEqual([0, 2, 4, 6, 8, 10]);
});
