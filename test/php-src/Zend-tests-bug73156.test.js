// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73156.phpt
  it("Bug #73156 (segfault on undefined function)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __call($name, $args) {\n        eval('$args = array(); var_dump(debug_backtrace());');\n    }\n}\n$a = new A();\n$a->test(\"test\");\n?>")).toMatchSnapshot();
  });
});
