// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/005.phpt
  it("Return value fails inheritance check in method", function () {
    expect(parser.parseCode("<?php\nclass foo {}\nclass qux {\n    public function foo() : foo {\n        return $this;\n    }\n}\n$qux = new qux();\n$qux->foo();\n?>")).toMatchSnapshot();
  });
});
