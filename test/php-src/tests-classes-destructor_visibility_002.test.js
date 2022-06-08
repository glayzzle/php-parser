// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/destructor_visibility_002.phpt
  it("ZE2 Ensuring destructor visibility", function () {
    expect(parser.parseCode("<?php\nclass Base {\n    private function __destruct() {\n        echo __METHOD__ . \"\\n\";\n    }\n}\nclass Derived extends Base {\n}\n$obj = new Derived;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
