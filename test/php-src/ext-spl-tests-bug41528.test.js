// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug41528.phpt
  it("Bug #41528 (Classes extending ArrayObject do not serialize correctly)", function () {
    expect(parser.parseCode("<?php\nclass ClassOne extends ArrayObject\n{\n    public $a = 2;\n}\n$classOne    = new ClassOne();\n$classOne->a = 1;\nvar_dump($classOne);\nvar_dump($classOne->a);\n$classOne = unserialize(serialize($classOne));\nvar_dump($classOne);\nvar_dump($classOne->a);\n?>")).toMatchSnapshot();
  });
});
