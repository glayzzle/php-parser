// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24436.phpt
  it("Bug #24436 (isset() and empty() produce errors with non-existent variables in objects)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function __construct() {\n        if (empty($this->test[0][0])) { print \"test1\";}\n        if (!isset($this->test[0][0])) { print \"test2\";}\n    }\n}\n$test1 = new test();\n?>")).toMatchSnapshot();
  });
});
