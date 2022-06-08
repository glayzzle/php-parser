// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78973.phpt
  it("Bug #78973: Destructor during CV freeing causes segfault if opline never saved", function () {
    expect(parser.parseCode("<?php\nfunction test($x) {\n}\ntest(new class {\n    public function __destruct() {\n        debug_print_backtrace();\n    }\n});\n?>")).toMatchSnapshot();
  });
});
