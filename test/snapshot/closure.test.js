const parser = require("../main");

describe("closure", () => {
  it("simple", () => {
    expect(
      parser.parseEval('$var = function() { echo "something"; };')
    ).toMatchSnapshot();
  });
  it("empty", () => {
    expect(parser.parseEval("$var = function() {};")).toMatchSnapshot();
  });
  it("argument", () => {
    expect(
      parser.parseEval('$var = function($arg) { echo "something"; };')
    ).toMatchSnapshot();
  });
  it("argument by ref", () => {
    expect(
      parser.parseEval('$var = function(&$arg) { echo "something"; };')
    ).toMatchSnapshot();
  });
  it("arguments", () => {
    expect(
      parser.parseEval(
        '$var = function($arg, $arg, $arg) { echo "something"; };'
      )
    ).toMatchSnapshot();
  });
  it("use", () => {
    expect(
      parser.parseEval(
        '$var = function() use ($message) { echo "something"; };'
      )
    ).toMatchSnapshot();
  });
  it("use multiple", () => {
    expect(
      parser.parseEval(
        '$var = function() use ($message, $message1, $message2) { echo "something"; };'
      )
    ).toMatchSnapshot();
  });
  it("use by ref", () => {
    expect(
      parser.parseEval(
        '$var = function() use (&$message) { echo "something"; };'
      )
    ).toMatchSnapshot();
  });
  it("argument and use", () => {
    expect(
      parser.parseEval(
        '$var = function($arg) use ($use) { echo "something"; };'
      )
    ).toMatchSnapshot();
  });
  it("arguments and uses", () => {
    expect(
      parser.parseEval(
        '$var = function($arg, $arg, $arg) use ($use, $use, $use) { echo "something"; };'
      )
    ).toMatchSnapshot();
  });
  it("inside call", () => {
    expect(
      parser.parseEval(`call(function ($arg) { return $arg; });`)
    ).toMatchSnapshot();
  });
});
