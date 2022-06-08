// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/factory_and_singleton_010.phpt
  it("ZE2 factory and singleton, test 10", function () {
    expect(parser.parseCode("<?php\nclass test {\n  private function __destruct() {\n    echo __METHOD__ . \"\\n\";\n  }\n}\n$obj = new test;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
