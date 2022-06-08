// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39445.phpt
  it("Bug #39445 (Calling debug_backtrace() in the __toString() function produces a crash)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    public function __toString() {\n        debug_backtrace();\n        return 'lowercase';\n    }\n}\n    $test = new test();\n    echo strtoupper($test);\n?>")).toMatchSnapshot();
  });
});
