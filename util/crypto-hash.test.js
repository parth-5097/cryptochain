const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
  // 18cf9ee2602b42179341fe0d81be31d94a2d8b4ea604f57d00f58732145f003f

  it("generate a SHA-256 hashed output", () => {
    expect(cryptoHash("kaipan")).toEqual(
      "b0ea891507b2e653b417175021e0f0afd0f06869ccbc99c6d05723492769bd32"
    );
  });

  it("produces the same hash with the same input arguments in any order", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "one", "two")
    );
  });

  it("produces a unique hash when the properties have changed on an input", () => {
    const foo = {};
    const originalHash = cryptoHash(foo);
    foo["a"] = "a";

    expect(cryptoHash(foo)).not.toEqual(originalHash);
  });
});
