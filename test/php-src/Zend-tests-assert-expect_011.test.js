// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_011.phpt
  it("test overloaded __toString on custom exception", function () {
    expect(parser.parseCode("<?php\nclass MyExpectations extends AssertionError {\n    public function __toString() {\n        return sprintf(\n            \"[Message]: %s\", __CLASS__);\n    }\n}\nclass One {\n    public function __construct() {\n        assert(false, (string) new MyExpectations());\n    }\n}\nclass Two extends One {}\nnew Two();\n?>")).toMatchSnapshot();
  });
});
