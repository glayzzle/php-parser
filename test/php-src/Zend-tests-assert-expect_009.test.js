// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/expect_009.phpt
  it("test stack trace is correct from failed exception in extended class", function () {
    expect(parser.parseCode("<?php\nclass One {\n    public function __construct() {\n    }\n}\nclass Two extends One {\n    public function __construct() {\n        assert(false);\n    }\n}\nnew Two();\n?>")).toMatchSnapshot();
  });
});
