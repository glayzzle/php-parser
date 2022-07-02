// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/factory_and_singleton_007.phpt
  it("ZE2 factory and singleton, test 7", function () {
    expect(parser.parseCode("<?php\nclass test {\n  protected function __clone() {\n  }\n}\n$obj = new test;\n$clone = clone $obj;\n$obj = NULL;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
