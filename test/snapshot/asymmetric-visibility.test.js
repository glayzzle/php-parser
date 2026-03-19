const parser = require("../main");

const opts = { parser: { version: 804 } };

describe("asymmetric visibility", () => {
  it("public private(set)", () => {
    expect(
      parser.parseEval("class Foo { public private(set) string $name; }", opts),
    ).toMatchSnapshot();
  });
  it("public protected(set)", () => {
    expect(
      parser.parseEval(
        "class Foo { public protected(set) string $url; }",
        opts,
      ),
    ).toMatchSnapshot();
  });
  it("protected private(set)", () => {
    expect(
      parser.parseEval(
        "class Foo { protected private(set) int $count; }",
        opts,
      ),
    ).toMatchSnapshot();
  });
  it("private(set) shorthand", () => {
    expect(
      parser.parseEval("class Foo { private(set) string $label; }", opts),
    ).toMatchSnapshot();
  });
  it("protected(set) shorthand", () => {
    expect(
      parser.parseEval("class Foo { protected(set) int $value; }", opts),
    ).toMatchSnapshot();
  });
  it("public static private(set)", () => {
    expect(
      parser.parseEval(
        "class Foo { public static private(set) string $name; }",
        opts,
      ),
    ).toMatchSnapshot();
  });
  it("constructor promotion public private(set)", () => {
    expect(
      parser.parseEval(
        "class Foo { public function __construct(public private(set) string $name) {} }",
        opts,
      ),
    ).toMatchSnapshot();
  });
  it("constructor promotion private(set) shorthand", () => {
    expect(
      parser.parseEval(
        "class Foo { public function __construct(private(set) string $name) {} }",
        opts,
      ),
    ).toMatchSnapshot();
  });
  it("constructor promotion protected(set) shorthand", () => {
    expect(
      parser.parseEval(
        "class Foo { public function __construct(protected(set) int $count) {} }",
        opts,
      ),
    ).toMatchSnapshot();
  });
  it("constructor promotion public protected(set)", () => {
    expect(
      parser.parseEval(
        "class Foo { public function __construct(public protected(set) string $url) {} }",
        opts,
      ),
    ).toMatchSnapshot();
  });
});
