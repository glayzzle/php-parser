// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/factory_and_singleton_008.phpt
  it("ZE2 factory and singleton, test 8", function () {
    expect(parser.parseCode("<?php\nclass test {\n  private function __clone() {\n  }\n}\n$obj = new test;\n$clone = clone $obj;\n$obj = NULL;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
