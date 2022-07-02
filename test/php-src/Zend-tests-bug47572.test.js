// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47572.phpt
  it("Bug #47572 (zval_update_constant_ex: Segmentation fault)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  public static $bar = array(\n    FOO => \"bar\"\n    );\n}\n$foo = new Foo();\n?>")).toMatchSnapshot();
  });
});
