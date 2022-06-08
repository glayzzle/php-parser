// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46381.phpt
  it("Bug #46381 (wrong $this passed to internal methods causes segfault)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    public function method() {\n        return ArrayIterator::current();\n    }\n}\n$test = new test();\n$test->method();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
