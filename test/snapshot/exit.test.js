const parser = require("../main");

describe("exit", function () {
  it("simple", function () {
    expect(parser.parseEval("exit();")).toMatchSnapshot();
  });
  it("argument", function () {
    expect(parser.parseEval("exit($var);")).toMatchSnapshot();
  });
  it("die", function () {
    expect(parser.parseEval("die();")).toMatchSnapshot();
  });
  it("exit without expression", function () {
    expect(parser.parseEval("exit;")).toMatchSnapshot();
  });
  it("exit with empty expression", function () {
    expect(parser.parseEval("exit();")).toMatchSnapshot();
  });
  it("exit with expression", function () {
    expect(parser.parseEval("exit(10 + $var);")).toMatchSnapshot();
  });
  it("die without expression", function () {
    expect(parser.parseEval("die;")).toMatchSnapshot();
  });
  it("die with empty expression", function () {
    expect(parser.parseEval("die();")).toMatchSnapshot();
  });
  it("die with expression", function () {
    expect(parser.parseEval("die(10 + $var);")).toMatchSnapshot();
  });
});
