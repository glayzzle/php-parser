// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_010.phpt
  it("test stack trace is correct from failed exception in extended class (parent implementing constructor)", function () {
    expect(parser.parseCode("<?php\nclass One {\n    public function __construct() {\n        assert(false);\n    }\n}\nclass Two extends One {}\nnew Two();\n?>")).toMatchSnapshot();
  });
});
