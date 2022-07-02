// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70215.phpt
  it("Bug #70215 (Segfault when invoke is static)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public static function __invoke() {\n        echo __CLASS__;\n    }\n}\nclass B extends A { }\n$b = new B;\n$b();\n?>")).toMatchSnapshot();
  });
});
