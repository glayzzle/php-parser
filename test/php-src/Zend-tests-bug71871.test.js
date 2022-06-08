// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71871.phpt
  it("Bug #71871: Interfaces allow final and abstract functions", function () {
    expect(parser.parseCode("<?php\ninterface test {\n    final function test();\n}\n?>")).toMatchSnapshot();
  });
});
