const parser = require("../main");

describe("arrow function", () => {
  it.each([
    ["simple", '$var = fn() => "something";'],
    ["argument", '$var = fn($arg) =>  "something";'],
    ["argument by ref", '$var = fn(&$arg) => "something";'],
    ["arguments", '$var = fn($arg, $arg, $arg) => "something";'],
    ["return type", '$var = fn(): ?string => "something";'],
    ["inside call", `call(fn($arg) => $arg);`]
  ])("%s", function(_, code) {
    expect(parser.parseEval(code)).toMatchSnapshot();
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
