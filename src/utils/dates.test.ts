import { getRangeHours } from "./dates";

describe("getRangeHours with increment of 2", () => {
  const hoursRange = getRangeHours(2);
  test("There are 12 slots of ranges", () => {
    expect(hoursRange).toHaveLength(12);
  });
  test("First range is 0-2", () => {
    expect(hoursRange[0][0]).toBe(0);
    expect(hoursRange[0][1]).toBe(2);
  });
  test("second range is 2-4", () => {
    expect(hoursRange[1][0]).toBe(2);
    expect(hoursRange[1][1]).toBe(4);
  });
  test("last range is 22-24", () => {
    const lastIndex = hoursRange.length - 1;
    expect(hoursRange[lastIndex][0]).toBe(22);
    expect(hoursRange[lastIndex][1]).toBe(24);
  });
});
describe("getRangeHours with increment of 3", () => {
  const hoursRange = getRangeHours(3);
  test("There are 8 slots of ranges", () => {
    expect(hoursRange).toHaveLength(8);
  });
  test("First range is 0-3", () => {
    expect(hoursRange[0][0]).toBe(0);
    expect(hoursRange[0][1]).toBe(3);
  });
  test("second range is 3-6", () => {
    expect(hoursRange[1][0]).toBe(3);
    expect(hoursRange[1][1]).toBe(6);
  });
  test("last range is 21-24", () => {
    const lastIndex = hoursRange.length - 1;
    expect(hoursRange[lastIndex][0]).toBe(21);
    expect(hoursRange[lastIndex][1]).toBe(24);
  });
});
describe("getRangeHours with increment of 5", () => {
  const hoursRange = getRangeHours(5);
  console.log(hoursRange);
  test("There are 4 slots of ranges", () => {
    expect(hoursRange).toHaveLength(5);
  });
  test("First range is 0-3", () => {
    expect(hoursRange[0][0]).toBe(0);
    expect(hoursRange[0][1]).toBe(5);
  });
  test("second range is 3-6", () => {
    expect(hoursRange[1][0]).toBe(5);
    expect(hoursRange[1][1]).toBe(10);
  });
  test("last range is 21-24", () => {
    const lastIndex = hoursRange.length - 1;
    expect(hoursRange[lastIndex][0]).toBe(20);
    expect(hoursRange[lastIndex][1]).toBe(25);
  });
});
