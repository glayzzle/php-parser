const parser = require("../main");

describe("interface", function () {
  it("interface name as identifier", function () {
    expect(parser.parseEval("interface A {}")).toMatchSnapshot();
  });
  it("extends", function () {
    expect(parser.parseEval("interface A extends B {}")).toMatchSnapshot();
  });
  it("multiple extends", function () {
    expect(parser.parseEval("interface A extends B, C {}")).toMatchSnapshot();
  });
  it("invalid private flag", function () {
    expect(
      parser.parseEval("interface A { private const B = 1; }", {
        parser: { suppressErrors: true },
      }),
    ).toMatchSnapshot();
  });

  describe("property hooks", function () {
    const test_parser = parser.create({
      parser: {
        version: "8.4",
      },
    });

    it("getter", () => {
      const code = `interface I {
    // An implementing class MUST have a publicly-readable property,
    // but whether or not it's publicly settable is unrestricted.
    public int $readable { get; }
}`;
      expect(test_parser.parseEval(code)).toMatchSnapshot();
    });

    it("setter", () => {
      const code = `interface I {
    // An implementing class MUST have a publicly-readable property,
    // but whether or not it's publicly settable is unrestricted.
    public int $readable { set; }
}`;
      expect(test_parser.parseEval(code)).toMatchSnapshot();
    });

    it("get + set", () => {
      const code = `interface I {
    // An implementing class MUST have a publicly-readable property,
    // but whether or not it's publicly settable is unrestricted.
    public int $readable { get; set;}
}`;
      expect(test_parser.parseEval(code)).toMatchSnapshot();
    });
  });
});
