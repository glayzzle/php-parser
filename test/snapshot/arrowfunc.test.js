const parser = require("../main");

describe("arrow function", () => {
  it("simple", () => {
    expect(
      parser.parseEval('$var = fn() => "something";')
    ).toMatchSnapshot();
  });
  it("argument", () => {
    expect(
      parser.parseEval('$var = fn($arg) =>  "something";')
    ).toMatchSnapshot();
  });
  it("argument by ref", () => {
    expect(
      parser.parseEval('$var = fn(&$arg) => "something";')
    ).toMatchSnapshot();
  });
  it("arguments", () => {
    expect(
      parser.parseEval(
        '$var = fn($arg, $arg, $arg) => "something";'
      )
    ).toMatchSnapshot();
  });
  it("return type", () => {
    expect(
      parser.parseEval(
        '$var = fn(): ?string => "something";'
      )
    ).toMatchSnapshot();
  });
  it("inside call", () => {
    expect(
      parser.parseEval(`call(fn($arg) => $arg);`)
    ).toMatchSnapshot();
  });
  it("error / fn passes on php7.3", () => {
    expect(
      parser.parseEval(`function fn($arg) { return $arg; }`, {
        parser: {
          php73: true,
          php74: false // disable the php 7.4 support
        }
      })
    ).toMatchSnapshot();
  });  
  it("error / fn fails on php7.4", () => {
    expect(
      parser.parseEval(`function fn($arg) { return $arg; }`, {
        parser: {
          php74: true,
          suppressErrors: true
        }
      })
    ).toMatchSnapshot();
  });  
  it("error / empty not allowed", () => {
    expect(
      parser.parseEval("$var = fn() => ;", {
        parser: {
          suppressErrors: true
        }
      })
    ).toMatchSnapshot();
  });

});
