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
  it("constructor promotion public public(set)", () => {
    expect(
      parser.parseEval(
        "class Foo { public function __construct(public public(set) string $name) {} }",
        opts,
      ),
    ).toMatchSnapshot();
  });
  it("duplicate set modifier", () => {
    expect(
      parser.parseEval(
        "class Foo { public private(set) protected(set) string $name; }",
        { parser: { version: 804, suppressErrors: true } },
      ),
    ).toMatchSnapshot();
  });
  it("duplicate visibility", () => {
    expect(
      parser.parseEval("class Foo { public public string $name; }", {
        parser: { version: 804, suppressErrors: true },
      }),
    ).toMatchSnapshot();
  });
  it("duplicate static flag", () => {
    expect(
      parser.parseEval("class Foo { static static string $name; }", {
        parser: { version: 804, suppressErrors: true },
      }),
    ).toMatchSnapshot();
  });
  it("malformed set keyword in property", () => {
    expect(
      parser.parseEval("class Foo { public private(foo) string $name; }", {
        parser: { version: 804, suppressErrors: true },
      }),
    ).toMatchSnapshot();
  });
  it("constructor promotion malformed set keyword shorthand", () => {
    expect(
      parser.parseEval(
        "class Foo { public function __construct(private(foo) string $name) {} }",
        { parser: { version: 804, suppressErrors: true } },
      ),
    ).toMatchSnapshot();
  });
  it("constructor promotion malformed set keyword explicit", () => {
    expect(
      parser.parseEval(
        "class Foo { public function __construct(public private(foo) string $name) {} }",
        { parser: { version: 804, suppressErrors: true } },
      ),
    ).toMatchSnapshot();
  });
  it("ignored below PHP 8.4", () => {
    expect(
      parser.parseEval("class Foo { public private(set) string $name; }", {
        parser: { version: 803, suppressErrors: true },
      }),
    ).toMatchSnapshot();
  });
});
