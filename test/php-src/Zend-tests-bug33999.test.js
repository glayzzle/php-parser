// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33999.phpt
  it("Bug #33999 (object remains object when cast to int)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n  public $bar = \"bat\";\n}\n$foo = new Foo;\nvar_dump($foo);\n$bar = (int)$foo;\nvar_dump($bar);\n$baz = (float)$foo;\nvar_dump($baz);\n?>")).toMatchSnapshot();
  });
});
