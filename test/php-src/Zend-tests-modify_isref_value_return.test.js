// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/modify_isref_value_return.phpt
  it("Indirect modification of isref by-value return value not possible", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $b;\n}\n$arr = [];\n$a = new A;\n$a->b =& $arr;\n(new ReflectionProperty('A', 'b'))->getValue($a)[] = 42;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
