const parser = require("../main");

describe("classconstant", () => {
  it("simple", () => {
    expect(
      parser.parseEval('class Foo { const CONSTANT = "Hello world!"; }')
    ).toMatchSnapshot();
  });
  it("multiple", () => {
    expect(
      parser.parseEval(
        'class Foo { const CONSTANT = "Hello world!", OTHER_CONSTANT = "Other hello world!"; }'
      )
    ).toMatchSnapshot();
  });
  it("public", () => {
    expect(
      parser.parseEval('class Foo { public const CONSTANT = "Hello world!"; }')
    ).toMatchSnapshot();
  });
  it("protected", () => {
    expect(
      parser.parseEval(
        'class Foo { protected const CONSTANT = "Hello world!"; }'
      )
    ).toMatchSnapshot();
  });
  it("private", () => {
    expect(
      parser.parseEval('class Foo { private const CONSTANT = "Hello world!"; }')
    ).toMatchSnapshot();
  });
});
