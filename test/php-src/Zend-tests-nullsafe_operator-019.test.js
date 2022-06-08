// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nullsafe_operator/019.phpt
  it("Test nullsafe in new", function () {
    expect(parser.parseCode("<?php\nclass Bar {}\nclass Foo {\n    public $bar;\n}\n$foo = new Foo();\n$foo->bar = 'bar';\nvar_dump(new $foo?->bar);\n$foo = null;\nvar_dump(new $foo?->bar);\n?>")).toMatchSnapshot();
  });
});
