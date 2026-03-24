const parser = require("../main");

describe("classconstant", () => {
  it("simple", () => {
    expect(
      parser.parseEval('class Foo { const CONSTANT = "Hello world!"; }'),
    ).toMatchSnapshot();
  });
  it("simple using 8.3", () => {
    expect(
      parser.parseEval(`class Foo { const CONSTANT = "Hello world!"; }`, {
        parser: { version: 803 },
      }),
    ).toMatchSnapshot();
  });

  it("multiple", () => {
    expect(
      parser.parseEval(
        'class Foo { const CONSTANT = "Hello world!", OTHER_CONSTANT = "Other hello world!"; }',
      ),
    ).toMatchSnapshot();
  });

  it("multiple 8.3", () => {
    expect(
      parser.parseEval(
        'class Foo { const NAME_1 = "Hello world!", NAME_2 = "Other hello world!"; }',
        {
          parser: { version: 803 },
        },
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
        'class Foo { public const string CONSTANT = "Hello world!"; }',
        { parser: { version: 803 } },
      ),
    ).toMatchSnapshot();
  });
  it("static should throw", () => {
    expect(() =>
      parser.parseEval("class Foo { static const CONSTANT = 1; }"),
    ).toThrow(SyntaxError);
  });
  it("abstract should throw", () => {
    expect(() =>
      parser.parseEval("class Foo { abstract const CONSTANT = 1; }"),
    ).toThrow(SyntaxError);
  });
  it("readonly should throw", () => {
    expect(() =>
      parser.parseEval("class Foo { readonly const CONSTANT = 1; }"),
    ).toThrow(SyntaxError);
  });
  it("type hinted (unsupported)", () => {
    expect(() =>
      parser.parseEval(
        'class Foo { public const string CONSTANT = "Hello world!"; }',
        { parser: { version: 802 } },
      ),
    ).toThrowErrorMatchingSnapshot();
  });
  it("multiline declaration with comment", () => {
    expect(
      parser.parseEval(
        `class Foo { 
          public
          const
          CONSTANT
          // Comment
          =
          'string';
        }`,
        { parser: { version: 803, extractDoc: true } },
      ),
    ).toMatchSnapshot();
  });
});
