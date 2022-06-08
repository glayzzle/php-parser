// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/factory_and_singleton_004.phpt
  it("ZE2 factory and singleton, test 4", function () {
    expect(parser.parseCode("<?php\nclass test {\n  private function __construct($x) {\n  }\n}\n$obj = new test;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
