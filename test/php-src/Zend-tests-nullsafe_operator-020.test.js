// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/020.phpt
  it("Test nullsafe lhs of assignment to nested property chain", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $bar;\n}\nfunction bar() {\n    var_dump('called');\n}\n$foo = null;\n$foo?->bar->baz = bar();\n?>")).toMatchSnapshot();
  });
});
