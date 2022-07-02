// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63976.phpt
  it("Bug #63976 (Parent class incorrectly using child constant in class property)", function () {
    expect(parser.parseCode("<?php\nif (1) {\n  class Foo {\n    const TABLE = \"foo\";\n    public $table = self::TABLE;\n  }\n}\nif (1) {\n  class Bar extends Foo {\n    const TABLE = \"bar\";\n  }\n}\n$bar = new Bar();\nvar_dump($bar->table);\n?>")).toMatchSnapshot();
  });
});
