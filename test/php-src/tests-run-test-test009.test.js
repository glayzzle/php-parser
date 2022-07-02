// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/test009.phpt
  it("print_r(Object)", function () {
    expect(parser.parseCode("<?php\nclass Foo {}\n$foo = new Foo;\nprint_r($foo);\n?>")).toMatchSnapshot();
  });
});
