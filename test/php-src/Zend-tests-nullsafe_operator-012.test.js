// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/012.phpt
  it("Test nullsafe property on reference", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $bar;\n}\n$foo = new Foo();\n$foo->bar = 'bar';\n$fooRef = &$foo;\nvar_dump($fooRef?->bar);\n?>")).toMatchSnapshot();
  });
});
