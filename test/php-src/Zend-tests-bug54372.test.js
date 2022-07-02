// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54372.phpt
  it("Bug #54372 (Crash accessing global object itself returned from its __get() handle)", function () {
    expect(parser.parseCode("<?php\nclass test_class\n{\n    public function __get($name)\n    {\n        return $this;\n    }\n    public function b()\n    {\n        echo \"ok\\n\";\n    }\n}\nglobal $test3;\n$test3 = new test_class();\n$test3->a->b();\n?>")).toMatchSnapshot();
  });
});
