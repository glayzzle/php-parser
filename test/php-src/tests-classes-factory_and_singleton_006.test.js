// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/factory_and_singleton_006.phpt
  it("ZE2 factory and singleton, test 6", function () {
    expect(parser.parseCode("<?php\nclass test {\n  private function __destruct() {\n  }\n}\n$obj = new test;\n$obj = NULL;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
