import { far } from "../index.js";

describe("test far number input", () => {
  it("1 cels to far to equal 33.8", () => {
    const result = far(1);
    expect(result).toBe(33.8);
  }),
  it("1000 cels to far to equal 1832", () => {
    const result = far(1000);
    expect(result).toBe(1832);
  }),
  it("-1000 cels to far to equal -1768", () => {
    const result = far(-1000);
    expect(result).toBe(-1768);
  });
});

describe("test far text input", () => {
  it("'test' to far to equal NaN", () => {
    const result = far('test');
    expect(result).toBe(NaN);
  });
});