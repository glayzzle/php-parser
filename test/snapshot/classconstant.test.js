const parser = require("../main");

describe("classconstant", () => {
  it("simple", () => {
    expect(
      parser.parseEval('class Foo { const CONSTANT = "Hello world!"; }'),
    ).toMatchSnapshot();
  });
  it("multiple", () => {
    expect(
      parser.parseEval(
        'class Foo { const CONSTANT = "Hello world!", OTHER_CONSTANT = "Other hello world!"; }',
      ),
    ).toMatchSnapshot();
  });
  it("public", () => {
    expect(
      parser.parseEval('class Foo { public const CONSTANT = "Hello world!"; }'),
    ).toMatchSnapshot();
  });
  it("protected", () => {
    expect(
      parser.parseEval(
        'class Foo { protected const CONSTANT = "Hello world!"; }',
      ),
    ).toMatchSnapshot();
  });
  it("private", () => {
    expect(
      parser.parseEval(
        'class Foo { private const CONSTANT = "Hello world!"; }',
      ),
    ).toMatchSnapshot();
  });
  it("final", () => {
    expect(
      parser.parseEval(
        'class Foo { final public const CONSTANT = "Hello world!"; }',
      ),
    ).toMatchSnapshot();
  });
  it("type hinted (supported)", () => {
    expect(
      parser.parseEval(
        `class Foo {
              public const CON_1 = "Hello world!";
              const CON_2 = "Hello world!";
              const string CON_3 = "Hello world!";
              public const string CON_4 = "Hello world!";
              public const string|int CON_5 = "Hello world!";
              const string|int CON_6 = "Hello world!";
              }`,
        { parser: { version: 803 } },
      ),
    ).toMatchSnapshot();
  });

  it("type hinted list of constant with mixed type", () => {
    expect(
      parser.parseEval(
        `class Foo {
                  public const string PUB1 = 'bar', PUB2 = 'bar2', int PUB3 = 1;
                  private const PRI1 = 'baz', string PRI2 = 'baz2';
                  private const string BOB = 'baz2';
                }`,
        { parser: { version: 803 } },
      ),
    ).toMatchSnapshot();
  });

  it("type hinted (unsupported)", () => {
    expect(() =>
      parser.parseEval(
        'class Foo { public const  DDCONSTANT = "Hello world!"; public const string CONSTANT = "Hello world!"; }',
        { parser: { version: 802 } },
      ),
    ).toThrowErrorMatchingSnapshot();
  });

  it("accept the constant name 'list'", () => {
    expect(
      parser.parseEval(
        `class Foo {
              const list = "Hello world!";
              }`,
        { parser: { version: 803 } },
      ),
    ).toMatchSnapshot();
  });
});
