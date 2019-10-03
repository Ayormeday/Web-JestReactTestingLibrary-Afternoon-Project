import * as helpers from "../helpers";

jest.mock("uuid", () => {
  return () => "123";
});

describe("sum", () => {
  it("returns null if fed no arguments", () => {
    expect(helpers.sum()).toBe(null);
  });
  it("returns null if fed a single argument", () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it("adds positive number correctly", () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it("adds negative number correctly", () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it("throws if fed something which is not a number", () => {
    expect(() => helpers.sum("1", "2")).toThrow();
  });
  it("can add three positive numbers", () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe("multiply", () => {
  // write tests! <================================================
  it("throw error if it receives a single argument", () => {
    expect(() => helpers.multiply(1)).toThrow();
  });
  it("throw error if fed no argument", () => {
    expect(() => helpers.multiply()).toThrow();
  });
  it("multiplies positive number correctly", () => {
    expect(helpers.multiply(2, 3)).toBe(6);
  });
  it("multiplies negative numbers correctly", () => {
    expect(helpers.multiply(-2, -3)).toBe(6);
  });
  it("throw error if number is a string", () => {
    expect(() => helpers.multiply("2", "3")).toThrow();
  });
});

describe("personMaker", () => {
  it("makes a person with name and age", () => {
    expect(helpers.personMaker("peter", 4)).toMatchObject({
      id: "123",
      name: "peter",
      age: 4
    });
  });
  it("checks if the function returns a defined value", () => {
    expect(helpers.personMaker("peter", 5)).toBeDefined();
  });


  // write more tests! <===========================================
});
