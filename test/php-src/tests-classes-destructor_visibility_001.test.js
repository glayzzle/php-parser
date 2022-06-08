// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/destructor_visibility_001.phpt
  it("ZE2 Ensuring destructor visibility", function () {
    expect(parser.parseCode("<?php\nclass Base {\n    private function __destruct() {\n        echo __METHOD__ . \"\\n\";\n    }\n}\nclass Derived extends Base {\n}\n$obj = new Derived;\nunset($obj);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
