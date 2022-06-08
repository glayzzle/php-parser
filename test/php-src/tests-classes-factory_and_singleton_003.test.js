// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/factory_and_singleton_003.phpt
  it("ZE2 factory and singleton, test 3", function () {
    expect(parser.parseCode("<?php\nclass test {\n  protected function __construct($x) {\n  }\n}\n$obj = new test;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
